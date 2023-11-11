// function createAsap() {
//   if (typeof MutationObserver === "function") {
//     return function asap(callback: () => void) {
//       const observer = new MutationObserver(function () {
//         callback();
//         observer.disconnect();
//       });
//       const target = document.createElement("div");
//       observer.observe(target, { attributes: true });
//       target.setAttribute("data-foo", "");
//     };
//   } else if (
//     typeof process === "object" &&
//     typeof process.nextTick === "function"
//   ) {
//     return function asap(callback: () => void) {
//       process.nextTick(callback);
//     };
//   } else if (typeof setImmediate === "function") {
//     return function asap(callback: () => void) {
//       setImmediate(callback);
//     };
//   } else {
//     return function asap(callback: () => void) {
//       setTimeout(callback, 0);
//     };
//   }
// }

// export const asap = createAsap();


function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
  return Boolean(
    value && typeof value === "object" && "then" in value && typeof value.then === "function"
  );
}


type Resolve<T> = (value: T) => void;
type Reject = (reason?: any) => void;

type Initializer<T> = (
  resolve: Resolve<T>,
  reject: Reject
) => void;

type AnyFunction = (...args: any) => void;
type Status = 'pending' | 'fulfilled' | 'rejected';

class MyPromise<T> {
  thenCbs: [AnyFunction | undefined, AnyFunction | undefined, Resolve<T>, Reject][] = [];
  // catchCbs: [AnyFunction, Reject][] = [];
  status: Status = 'pending';
  value: T | null = null;
  error?: any;

  constructor(initializer: Initializer<T>) {
    try{
      initializer(this.resolve, this.reject);
    } catch(error) {
      this.reject(error);
    }
  }

  then = (thenCb?: (value: T) => void, catchCb?: (reason?: any) => void) => {
    return new MyPromise((resolve, reject) => {
      this.thenCbs.push([thenCb, catchCb, resolve, reject]);
    })
  }

  catch = (catchCb?: (reason?: any) => any) => {
    return new MyPromise((resolve, reject) => {
      this.thenCbs.push([undefined, catchCb, resolve, reject]);
    })
  }

  private resolve = (value: T | PromiseLike<T>) => {
    if (isPromiseLike(value)) {
      value.then(this.resolve, this.reject);
    } else {
      this.status = 'fulfilled';
      this.value = value;
    }
    this.processNextTask();
  }

  private reject = (reason?: any) => {
    this.status = 'rejected';
    this.error = reason;
    this.processNextTask();
  }

  private processNextTask = () => {
    // asap(() => {
      // todo
      // move code here
    // })

    if (this.status === 'pending') {
      return;
    }
    const thenCbs = this.thenCbs;
    this.thenCbs = [];
    thenCbs.forEach(([thenCb, catchCb, resolve]) => {
      try {
        if (this.status === 'fulfilled') {
          const value = thenCb ? thenCb(this.value) : this.value;
          resolve(value as T);
        } else {
          const reason = catchCb ? catchCb(this.error) : this.error;
          resolve(reason as T);
        }
      } catch(error) {
        this.reject(error);
      }
    })
  }
}

const sleep = (ms: number) => {
  return new MyPromise((res, rej) => {
    setTimeout(() => {
      res(10);
    }, ms)
  })
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(5)
  }, 1000)
})
  .then((value) => {
    console.log('value = ', value)
    return value;
  })
  .then((value) => {
    console.log('value = ', value)
  })
  .catch((error) => {
    console.log('error = ', error)
  })

































// function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
//   return Boolean(
//     value && typeof value === "object" && "then" in value && typeof value.then === "function"
//   );
// }


// type Resolve<T> = (value: T) => void;
// type Reject = (reason?: any) => void;

// type Initializer<T> = (
//   resolve: Resolve<T>,
//   reject: Reject
// ) => void;

// type AnyFunction = (...args: any) => void;
// type Status = 'pending' | 'fulfilled' | 'rejected';

// class MyPromise<T> {
//   thenCbs: [AnyFunction, Resolve<T>][] = [];
//   catchCbs: [AnyFunction, Reject][] = [];
//   status: Status = 'pending';
//   value: T | null = null;
//   error?: any;

//   constructor(initializer: Initializer<T>) {
//     initializer(this.resolve, this.reject);
//   }

//   then = (thenCb: (value: T) => void) => {
//     return new MyPromise((resolve) => {
//       this.thenCbs.push([thenCb, resolve]);
//     })
//   }

//   catch = (catchCb: (reason?: any) => any) => {
//     return new MyPromise((reject) => {
//       this.catchCbs.push([catchCb, reject]);
//     })
//   }

//   private resolve = (value: T | PromiseLike<T>) => {
//     if (isPromiseLike(value)) {
//       value.then(this.resolve, this.reject);
//     } else {
//       this.status = 'fulfilled';
//       this.value = value;
//     }
//     this.processNextTask();
//   }

//   private reject = (reason?: any) => {
//     this.status = 'rejected';
//     this.error = reason;
//     this.processNextTask();
//   }

//   private processNextTask = () => {
//     if (this.status === 'pending') {
//       return;
//     }
//     if (this.status === 'fulfilled') {
//       const thenCbs = this.thenCbs;
//       this.thenCbs = [];
//       thenCbs.forEach(([thenCb, resolve]) => {
//         const value = thenCb(this.value);
//         resolve(value as T);
//       })

//     }
//     if (this.status === 'rejected') {
//       const catchCbs = this.catchCbs;
//       this.catchCbs = [];
//       catchCbs.forEach(([catchCb, reject]) => {
//         const error = catchCb(this.error);
//         resolve(error);
//         reject(error);
//       })

//     }
//   }
// }

// const sleep = (ms: number) => {
//   return new MyPromise((res, rej) => {
//     setTimeout(() => {
//       res(10);
//     }, ms)
//   })
// }

// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5)
//   }, 1000)
// })
//   .then((value) => {
//     console.log('value = ', value)
//     return value;
//   })
//   .then((value) => {
//     console.log('value = ', value)
//   })
//   .catch((error) => {
//     console.log('error = ', error)
//   })
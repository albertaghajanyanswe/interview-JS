
'use strict';

type Status = 'pending' | 'fulfilled' | 'rejected';

type AnyFunction = (...args: any) => void;
type Resolve<T> = (value: T) => void;
type Reject = (reason: any) => void;

type Initializer<T> = (
  resolve: Resolve<T>,
  reject: Reject
)
class MyPromise<T> {
  status: Status = 'pending';
  value: T | null = null;
  error: any;
  callbackList: [AnyFunction | undefined, AnyFunction | undefined, Resolve<T>, Reject][] = [];

  constructor(initializer: Initializer<T>) {
    try {
      initializer(this.resolve, this.reject);
    } catch(error) {
      this.reject(error)
    }
  }

  then: (thenCb?: (value: T) => void, catchCb?: (reason?: any) => void) => {

  }
  catch: () => {

  }

  private resolve: () => {

  }
  private reject: () => {

  }
}

const p1 = new MyPromise((resolve, reject) => {
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
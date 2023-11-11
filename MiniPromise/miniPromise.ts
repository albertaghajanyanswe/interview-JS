enum PromiseState {
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

type Executor<T> = (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void;

class MiniPromise<T> {
  private state: PromiseState = PromiseState.Pending;
  private value: T | undefined;
  private reason: any;
  private onFulfilledCallbacks: ((value?: T | PromiseLike<T>) => void)[] = [];
  private onRejectedCallbacks: ((reason?: any) => void)[] = [];

  constructor(executor: Executor<T>) {
      try {
          executor(this.resolve.bind(this), this.reject.bind(this));
      } catch (error) {
          this.reject(error);
      }
  }

  private resolve(value?: T | PromiseLike<T>): void {
      if (this.state === PromiseState.Pending) {
          this.state = PromiseState.Fulfilled;
          this.value = value;
          this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
  }

  private reject(reason?: any): void {
      if (this.state === PromiseState.Pending) {
          this.state = PromiseState.Rejected;
          this.reason = reason;
          this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
  }

  then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (reason: any) => U | PromiseLike<U>): MiniPromise<U> {
      return new MiniPromise<U>((resolve, reject) => {
          const handleFulfillment = (value: T) => {
              try {
                  const result = onFulfilled ? onFulfilled(value) : value;
                  this.handleResult(result, resolve, reject);
              } catch (error) {
                  reject(error);
              }
          };

          const handleRejection = (reason: any) => {
              try {
                  const result = onRejected ? onRejected(reason) : reason;
                  this.handleResult(result, resolve, reject);
              } catch (error) {
                  reject(error);
              }
          };

          if (this.state === PromiseState.Fulfilled) {
              handleFulfillment(this.value as T);
          } else if (this.state === PromiseState.Rejected) {
              handleRejection(this.reason);
          } else {
              this.onFulfilledCallbacks.push(handleFulfillment);
              this.onRejectedCallbacks.push(handleRejection);
          }
      });
  }

  private handleResult<U>(result: U | PromiseLike<U>, resolve: (value?: U | PromiseLike<U>) => void, reject: (reason?: any) => void): void {
      if (result instanceof MiniPromise) {
          result.then(resolve, reject);
      } else {
          resolve(result);
      }
  }
}

// Пример использования:
const promise = new MiniPromise<number>((resolve, reject) => {
  setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
          resolve(randomNumber);
      } else {
          reject('Error: Random number is less than 0.5');
      }
  }, 1000);
});

promise
  .then(value => {
      console.log('Fulfilled with value:', value);
      return value * 2;
  })
  .then(result => {
      console.log('Fulfilled with result:', result);
  })
  .then(() => {
      console.log('This will be executed even if the previous then has no handler.');
  })
  .then(
      undefined,
      reason => {
          console.log('Rejected with reason:', reason);
      }
  );

const fetchUrl = (url) => {
  console.log(`Fetching url: ${url}`)
}

function fetchUrl2(url) {
  console.log(`Fetching url: ${url} - ${this.firstName}`)
}

const user = {
  firstName: 'Bob'
}

function debounce(callback, delay) {
  let timer = null;
  return (args) => {
    console.log('args = ', args)
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(args)
    }, delay);
  }

}

const fetching = debounce(fetchUrl2.bind(user), 300)

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);


function throttle(func, delay) {
  let shouldBeCalled= true;

  return function(...args) {
    if (!shouldBeCalled) return;

    shouldBeCalled = false;

    setTimeout(() => {
      shouldBeCalled = true;
    }, delay);

    func.apply(this, args);
  }
}


/* REACT */
// import { useEffect, useState } from 'react'
// export function useDebounce<T>(value: T, delay?: number): T {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value)

//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

//     return () => {
//       clearTimeout(timer)
//     }
//   }, [value, delay])

//   return debouncedValue
// }
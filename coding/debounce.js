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

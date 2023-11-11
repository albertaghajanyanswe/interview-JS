function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Your original function
function search(query) {
  console.log(`Searching for: ${query}`);
}

// Create a debounced version of the function
const debouncedSearch1 = debounce(search, 1000);
const debouncedSearch2 = debounce(search, 2000);
const debouncedSearch3 = debounce(search, 3000);

// Call the debounced function
debouncedSearch1("apple");
debouncedSearch2("banana");
debouncedSearch3("cherry");
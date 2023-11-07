function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);
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
const debouncedSearch = debounce(search, 300);

// Call the debounced function
debouncedSearch("apple");
debouncedSearch("banana");
debouncedSearch("cherry");
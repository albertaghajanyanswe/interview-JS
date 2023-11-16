class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
  }

  // Simple hash function using character codes
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  // Retrieve the value associated with a key
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (const entry of this.table[index]) {
        if (entry.key === key) {
          return entry.value;
        }
      }
    }
    return undefined; // Key not found
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter((entry) => entry.key !== key);
    }
  }
}

// Example usage
const myHashTable = new HashTable();

myHashTable.insert('firstName', 'John');
myHashTable.insert('firstName1', 'John1');
myHashTable.insert('firstName2', 'John1');
myHashTable.insert('firstName3', 'John1');
myHashTable.insert('firstName4', 'John1');
myHashTable.insert('firstName5', 'John1');
myHashTable.insert('firstName6', 'John1');
myHashTable.insert('firstName7', 'John1');
myHashTable.insert('firstName8', 'John1');
myHashTable.insert('firstName9', 'John1');
myHashTable.insert('firstName10', 'John1');
myHashTable.insert('firstName11', 'John1');
myHashTable.insert('firstName12', 'John1');
myHashTable.insert('firstName13', 'John1');
myHashTable.insert('lastName', 'Doe');
myHashTable.insert('age', 30);

console.log('myHashTable = ', JSON.stringify(myHashTable, null, 2))
console.log(myHashTable.get('firstName'));
console.log(myHashTable.get('lastName'));
console.log(myHashTable.get('age'));

myHashTable.remove('lastName');
console.log(myHashTable.get('lastName'));
/*
  ------------------------- Data Structures ----------------------------
  - Arrays
  - Stacks
  - Queues
  - Linked List
  - Trees
  - Tries
  - Graphs
  - Hash Table

  Bonus Classes in JS

 */
/*
----------------------- Classes in JavaScript ----------------------------
 */

console.log('------------- Classes in JS -------------');

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {

  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`WEEEEEEEEE I'm a ${this.type}`);
  }

}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard2.introduce();

/*
-------------------------------- Arrays ---------------------------------
  - index -- [item]
  - 0 -- [Apple]
  - 1 -- [Banana]
  - 2 -- [Grapefruit]

  O(1) - Lookup
  O(1) - append *Can be O(n) if dynamic array bc it changes location
  O(n) - insert
  O(n) - delete

  - Push: Adds something to end of array
          .add(var) java
  - insert: Place something int
          .add(position, var)
  - unshift: Place an item in a list and shift the indices
  - splice: Place an item at a given location, can delete item also


  - STATIC ARRAYS --> Arrays that are fixed in size
                  --> Manually allocate or update memory
  - DYNAMIC ARRAYS --> Arrays that are subject to change on size
                   --> PC manages memory for you

 */

const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer,
// 'hey go to the array and grab the 3rd item from where the array is stored.'

console.log('------------- Arrays -------------');
console.log('original array ' + strings);

//push
strings.push('e');
console.log('push ' + strings);

//pop
strings.pop();
console.log('pop ' + strings);

strings.pop();
console.log('pop ' + strings);

//unshift
strings.unshift('x')
console.log('unshift ' + strings);

//splice
strings.splice(2, 0, 'alien');
console.log(strings);

// Building an array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i =index; i <this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray);
newArray.push('hi');
newArray.push('you');
newArray.push('friend');
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.push('friend');
newArray.push('or');
newArray.push('not');
newArray.push('friend');
console.log(newArray);
newArray.delete(3);
console.log(newArray);

/**
 * reverse a string
 */

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good'
  }

  const reversedStr = [];
  for (let i = str.length; i >= 0; i--) {
    reversedStr.push(str1[i]); // In JavaScript you can push the value looping backwards 1 by 1 on the reversedStr
  }
  return reversedStr.join('');
}


const str1 = "Hello";
const str2 = reverse(str1);
console.log(str2);


// String -> Array -> Array.reverse() -> String
function reverse2(str) {
  return [...str].reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

/*
Given two arrays, merge them together and sort them
Input: arr1[0, 3, 4, 31] arr2[4, 6, 30]
Output: [0, 3, 4, 4, 6, 30, 32]

Question:
1.) Are these list always in ascending order?

 */

function mergeSortedArrays(arr1, arr2) {

  const sortedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if(arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {

    if (!array2Item || array1Item < array2Item) {
      sortedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    }
    else {
      sortedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return sortedArray;
}

const arrayA = [0, 5, 20, 31, 70];
const arrayB = [1, 4, 6, 45, 100, 200, 300];

console.log(mergeSortedArrays(arrayA, arrayB));

console.log('-------------------TwoSum-------------------')
/**
 * Two Sum: Give an array of numbers return two index of two numbers that
 * sum to the target number
 */
const twoSum = function(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const runningTarget = target - nums[i];
    if (runningTarget in map) {
      return [map[runningTarget], i]
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
}

const arrayC = [3, 3];
const arrayD = [2, 7, 11, 15];

console.log(twoSum(arrayC, 6));
console.log(twoSum(arrayD, 9));

console.log('-------------------Max SubArray-------------------')

/**
 * Maximum subarray: return the subarray with the max sum in an array
 */
const maxSubArray = function (nums) {
  let runningSum = 0;
  let maximumSum = -Infinity;

  for (let i =0; i < nums.length; i++) {
    runningSum = Math.max(nums[i], nums[i] + runningSum);
    maximumSum = runningSum > maximumSum ? runningSum : maximumSum;
  }
  return maximumSum;
};

const arrayE = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arrayE));

console.log('-------------------Move Zeros-------------------')

/**
 * Given an Integer array nums, move all 0's to the end of it while maintaining
 * the order of the non-zero elements *Note -- this must be done in place ie you
 * cannot copy the array
 */

const moveZeros = function (nums) {

  let nonZeroIndex = 0; // Index of the last non zero num
  for (let i =0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
      //console.log(nums);
    }
  }

  for (let j = nonZeroIndex; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
}

const arrayF = [0, 1, 0, 5, 7, 8];
console.log(moveZeros(arrayF));

console.log('-------------------Contains Duplicates-------------------')

/**
 * determines if a given array has duplicates
 * @param nums
 */
const containsDuplicate = function(nums) {

  /*
  Input: 1, 2, 3, 4, 5
  Output: false

  Input: 1
  Output: false

  Input: 1, 2, 3, 4, 2
  Output: true;

  Input: []
  Output: false;


  Approach:
  1.) Loop through the list placing values into a map
  2.) Check if that value already exists in the map
  3.) true -- return true
  4.) false -- place item into map
  5.) If loop exits return false

  Time Complexity: O(n)
  Space Complexity: O(n)

   */


  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return true;
    } else {
      map[nums[i]] = i;
    }
  }

  return false;

};

const arrayG = [1, 2, 3, 4, 5];
const arrayH = [1, 2, 3, 2];
const arrayI = [];
const arrayJ = [1];

console.log(containsDuplicate(arrayG));
console.log(containsDuplicate(arrayH));
console.log(containsDuplicate(arrayI));
console.log(containsDuplicate(arrayJ));

console.log('-------------------Rotate Array-------------------');

/**
 * rotate an array the right by a give value
 * @param nums the array to rotate
 * @param k the number to rotate
 * @returns {*[]|*}
 */
const rotate = function(nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length-k));
  return nums;
};

const reverseArray = (nums, l, h) => {
  while (l < h) {
    const t = nums[l];
    nums[l++] = nums[h];
    nums[h--] = t;
  }
};

const rotateBetter = function(nums, k) {
  const length = nums.length;
  k %= length;
  reverseArray(nums, 0, length - k - 1);
  reverseArray(nums, length - k, length - 1);
  reverseArray(nums, 0, length - 1);
  return nums;
};


const arrayK = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateBetter(arrayK, 3));

/*
--------------Hash Tables, Hash Maps, Maps, Dictionaries--------------------

  - They are important for databases and caches
  - We have a key that acts as where to find a value in memory
      'grapes' -> key: 711 ; value: 10000

  - A hash function generates a value of fixed length for each input that it gets
       'Hello' - HashFunction('Hello') -> 5d41402abc4b2a76b9719d911017c592

  - This is one way; however, Hello will always produce 5d4... but  5d4... will
    never be able to produce hello

  - idempotent - that a function, given the same input, will always
                 output the same value no matter what

  - A hash function gives us an address to look something up

  O(1) -- lookup
  O(1) -- Insert
  O(1) -- delete
  O(1) -- search

  - Hash Collisions: when randomly assigning values sometimes objects
  are assigned to the same location and create a linked list type structure
  that

  - O(n/k) => O(n), where k is the size of your hashtable
  - Two ways to deal with these collisions:
      1.) Separate Chaining - Linked lists
      2.)

  - Maps maintain insertion order in javaScript
  - Sets only store the keys

 */

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhhhhhh!');
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)


const a = new Map();
const b = new Set();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // _ in JS world this means private development standard
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
      return this.data;
    }
  }

  // O(1) if there are no collisions --> O(n) if there is a collision
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  // Loop through all of the keys of our hash tables
  keys() {
    if (!this.data.length) {
      return undefined;
    }

    const keyArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i] && this.data[i].length) {
        if(this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keyArray.push(this.data[i][j][0]);
          }
        } else {
          keyArray.push(this.data[i][0][0]);
        }
      }
    }
    return keyArray;
  }

}

console.log('-------------------Hash Maps-------------------');

const hashTableA = new HashTable(50);
hashTableA.set('grapes', 10000);
hashTableA.set('apples', 54);
hashTableA.set('oranges', 2);
hashTableA.set('bananas', 10);
hashTableA.set('artichoke', 15);

console.log(hashTableA.get('grapes'));
hashTableA.get(hashTableA.get('apples'));
console.log(hashTableA.keys());

/*
    hash table vs array

    O(1) vs O(n) -- search
    O(1) vs O(1) -- lookup
    O(1) vs O(n) -- insert
    O(1) vs O(n) -- delete

    - Hash tables don't have a concept of order and are subject to collision

 */

/*
  Given an array tell me what the first recurring character is
  Input = [2, 5, 1, 2, 3, 5, 1, 2, 4]
  Output = 2

  Input = [2, 1, 1, 3]
  Output = 1

  Input = [1, 2, 3, 4]
  Output = undefined

 */

const firstRepeatingValue = function (array) {
  if (!array.length) {
    return undefined;
  }

  let map = {};

  for (let i = 0; i < array.length; i++) {
    // if (map[array[i]]) and this reads as if there exists array[i] key in map
    if (array[i] in map) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
  }
  return undefined;
}

const arrayL = [2, 5, 1, 2, 3, 5];
console.log(firstRepeatingValue(arrayL));

const arrayM = [];
console.log(firstRepeatingValue(arrayM));

const arrayN = [1, 2, 3, 4];
console.log(firstRepeatingValue(arrayN));

const arrayO = [2];
console.log(firstRepeatingValue(arrayO));

const arrayP = [2, 1, 1, 2];
console.log(firstRepeatingValue(arrayP));

const arrayQ = [2, 1, 3, 1, 3, 2, 1];
console.log(firstRepeatingValue(arrayQ));


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

  - Cache Locality: The hardware in computers is designed to access memory
                    close to one another so it make arrays slightly faster
                    than datatype that store info at decentralized addresses

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

  Pro:
  - Fast Lookups
  - Fast Inserts
  - Flexible Keys

  Cons:
  - Unordered
  - Slow Key iteration
  - Potential collisions

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

// O(n) -- time complexity
// O(n) -- space complexity
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

/*
    ---------------------------- Linked Lists ------------------------------

    [head node] ---> [node] ---> [node] ---> [tail node] ---> null
    [----5----]      [-10-]      [-12-]      [----2----]

    - Linked lists are null terminated
    - a pointer points to the next element in the list

    - JS does not have a linked list data structure but Java does
    - There is singly and doubly linked list

    - Doubly linked lists allow nodes to point to one another meaning you
      can traverse backwards because they have an additional prev pointer

    [head node] ---> [node] ---> [node] ---> [tail node] ---> null
    [----5----] <--- [-10-] <--- [-12-] <--- [----2----]

    - You SHOULD USE A SINGLY LINKED LIST when you need to use less space,
      you DON'T need to traverse backwards or search, and you want
      FAST insertion and deletion

    - You SHOULD USE A DOUBLY LINKED LIST when you want to traverse backwards,
      DON'T care about memory and you AREN'T frequently inserting and deleting,
      but you do want to search

    downside - a little more memory

    - Why might linked lists be better than hashmap or arrays?
      1.) They are ordered
      2.) You can access and manipulate both the front and back of list
      3.) When you remove/insert a value the pointers just adjusts to the new
          or deleted node as opposed to reassigning all the values like a list
      4.) Traversal is the same as array iteration except you don't know
          how long the list will be but traversal is longer bc of computer
          hardware

     - Arrays are good bc computers are designed to find addresses next to one
       another as opposed to scattered addresses

       O(1) - Prepend
       O(1) - Append
       O(n) - lookup
       O(n) - insert (have to go 1 by 1 to find where to place)
       O(n) - delete

       *insert and delete are still on average better in linked list than w/ arr

     - What is a pointer?
       A pointer is a reference to another object, node etc in memory


     Pros:
     Fast Insertion and Deletion
     Ordered
     Flexible Size

     Cons:
     Slow Lookup
     More memory

 */


// Pointer example
const obj1 = { a: true};
const obj2 = obj1; // This a pointer by referencing the same object at the same address

console.log('obj1', obj1);
console.log('obj2', obj2);

obj1.a = 'booya';

console.log('obj1', obj1);
console.log('obj2', obj2);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array =[];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let leader = this.traverseToIndex(index-1);
    const tempPointer = leader.next;
    leader.next = newNode;
    newNode.next = tempPointer;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    } else {
      let leader = this.traverseToIndex(index-1);
      let deletedNote = leader.next;
      let follower = deletedNote.next;
      leader.next = follower;
      this.length--;
      return this.printList();
    }
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {

    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }

}

const linkedListA = new LinkedList(10);
linkedListA.append(5);
linkedListA.append(15);
linkedListA.prepend(20);

console.log(linkedListA);
console.log(linkedListA.printList())
linkedListA.insert(2, 7);
console.log(linkedListA.printList())
console.log(linkedListA);

linkedListA.remove(2);
console.log(linkedListA.printList());
linkedListA.remove(0);
console.log(linkedListA.printList());

linkedListA.reverse();
console.log('reversed', linkedListA.printList());

console.log('-------- double linked list --------');

class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DNode(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new DNode(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array =[];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new DNode(value);
    let leader = this.traverseToIndex(index-1);
    const tempPointer = leader.next;
    tempPointer.prev = newNode;
    leader.next = newNode;
    newNode.next = tempPointer;
    newNode.prev = leader;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    } else {
      let leader = this.traverseToIndex(index-1);
      let deletedNote = leader.next;
      let follower = deletedNote.next;
      deletedNote.prev = leader;
      leader.next = follower;
      this.length--;
      return this.printList();
    }
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

}


const doublyLinkedListA = new DoublyLinkedList(10);
console.log(doublyLinkedListA.printList());

doublyLinkedListA.append(5);
console.log(doublyLinkedListA.printList());

doublyLinkedListA.prepend(15);
console.log(doublyLinkedListA.printList());

doublyLinkedListA.insert(1, 7);
console.log(doublyLinkedListA.printList());

doublyLinkedListA.remove(2);
console.log(doublyLinkedListA.printList());

/*
  ---------------------- Stacks and Queues --------------------------

  Stacks: A type of data structure that are similar to stacked plates -- you
          can only access the first plate and iterate through to grab a specific
          plate - LIFO 'Last in First Out'

  O(n) -- lookup
  O(1) -- pop
  O(1) -- push
  O(1) -- peek

  Browser History
  3. [youtube]
  2. [udemy]
  1. [google]

  Queues: Similar to a roller coaster line with the FIFO principal 'first in
          first out'

  Ideally you would want to implement a queue with a linked list

  O(n) -- lookup
  O(1) -- enqueue
  O(1) -- dequeue
  O(1) -- peek

  Wait List
  1. [Matt]
  2. [Joy]
  3. [Samir]
  4. [Pavel]

  Pros:
  1.) Fast Operations
  2.) Fast Peek
  3.) Ordered

  Cons:
  1.) Slow lookup

 */

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let tempNode = this.top;
      this.top = newNode;
      newNode.next = tempNode;

    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.isEmpty()) {
      this.bottom = null;
    }

    const tempNode = this.top; // garbage collected language like JS automatically removed
    this.top = this.top.next;
    this.length--;
    return tempNode;
  }

  isEmpty() {
    return (this.length < 1);
  }
}

const stackA = new Stack();
stackA.push(1);
stackA.push(2);
stackA.push(3);


console.log(stackA);
console.log(stackA.peek());

stackA.pop();
console.log(stackA);


class StackArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length-1];
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.isEmpty();
  }
}

console.log('----------- stacks array -------------')

const stackArrayA = new StackArray();
stackArrayA.push(10);
stackArrayA.push(15);
stackArrayA.push(20);

console.log(stackArrayA);

stackArrayA.pop();
console.log(stackArrayA);


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const tempNode = this.last;
      tempNode.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const deletedNode = this.first;
    this.first = this.first.next;
    this.length--;
    return deletedNode;
  }

  isEmpty() {
    return (this.length < 1);
  }
}

const queueA = new Queue();
queueA.enqueue("Tim");
queueA.enqueue("Silas");
queueA.enqueue("Margarie");
console.log(queueA);

queueA.dequeue();
console.log(queueA);


/*

   Interview Problem: Implement a Queue Using Stacks



 */

class QueueS {
  constructor() {
    this.first = [];
    this.last = [];
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }

    return this.first[this.first.length - 1];

  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  isEmpty() {
    return (this.last.length < 1 && this.first.length < 1);
  }
}

const queueB = new QueueS();
queueB.enqueue("Tom");
console.log(queueB);
queueB.enqueue("Brady");
console.log(queueB);

queueB.enqueue("Ryan");
queueB.enqueue("Reynolds");
console.log(queueB);

queueB.dequeue();
console.log(queueB);

queueB.dequeue()
console.log(queueB);

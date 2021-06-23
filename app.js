
// Solution 1
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);

console.log(filterOutOdds(1,2,3,4));

// Solution 2
const findMin = (...nums) => Math.min(...nums);

console.log(findMin(1,2,3,-4));

// Solution 3
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}

// Solution 4
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)) // [2, 20, 8]


// Solution 5
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let randomNum = Math.floor(Math.random() * items.length);
    return items.filter((item, index) => index !== randomNum);
}

console.log(removeRandom([1,2,3,4]));

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

console.log(extend([1,2,3],[4,5,6]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

console.log(addKeyVal({name: "john", age: 21}, "JobDescription", "Programmer"));



/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key]; 
    return newObj;
};


console.log(removeKey({a: 1, b: 2}, "a"));


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

console.log(combine({a : 1}, {b : 2}))


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj; 
}

console.log(update({a : 1, b : 2}, "b", 3));



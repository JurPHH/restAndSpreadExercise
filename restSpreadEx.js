function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
/* Write an ES2015 Version */
const filterOutOdds = (...args) => args.filter(num => num % 2);
// ------------------------------------------------------------------------

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

// Slice and Dice!---------------------------------------------------------

const removeRandom = arr => {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return [...arr.slice(0, randomIdx), ...arr.slice(randomIdx + 1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2]

const addKeyVal = (obj, key, val) => ({...obj, [key]: val})

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => ({ ...obj, [key]: val})

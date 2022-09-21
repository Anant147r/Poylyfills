// MAP

var arr = [5, 10, 15, 23, 48, 55];
Array.prototype.myMap = function (callback) {
  let finalArray = [];
  for (let i = 0; i < this.length; i++) {
    finalArray.push(callback(this[i], i, this));
  }
  return finalArray;
};

function incrementer(currentVal, index, arr) {
  return currentVal + 5;
}

var finalArray = arr.myMap(incrementer);
// console.log(finalArray);

// FILTER

var arr = [200, 20, 10, 3, 4, 5, 66, 87, 99];
Array.prototype.myFilter = function (callback) {
  let finalArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, arr)) finalArray.push(this[i]);
  }
  return finalArray;
};

function filterFunction(ele, index, array) {
  return ele > 50;
}

var finalArray = arr.myFilter(filterFunction);
// console.log(finalArray);

// REDUCE

var arr = [2, 5, 4, 6, 20, 22, 4];
Array.prototype.myReduce = function (callback, initialValue) {
  var array = this;
  for (let i = 0; i < array.length; i++) {
    initialValue = initialValue ? callback(initialValue, array[i]) : array[i];
  }
  return initialValue;
};

function myReducer(accumulator, value) {
  return accumulator + value;
}

var finalValue = arr.myReduce(myReducer, 10);

console.log(finalValue);

// BIND
function fun() {
  console.log(this);
}

const obj = {
  name: "Anant",
};

Function.prototype.myBind = function (obj) {
  var dummyFunction = this;
  function finalFunction() {
    dummyFunction.call(obj);
  }
  return finalFunction;
};

var finalFunction = fun.myBind(obj);

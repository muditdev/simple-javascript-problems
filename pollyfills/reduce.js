const arr = [
  { name: "Mudit", age: "25" },
  { name: "Ankit", age: "26" },
  { name: "Rahul", age: "27" },
];

Array.prototype.customReduce = function (callback, initialValue) {
  if (!callback || typeof callback !== "function") {
    throw Error("The callback is not function.");
  }
  if (!this) {
    throw Error("Can not call on null or undefined.");
  }
  let result = typeof initialValue === "undefined" ? this[0] : initialValue;
  for (let i = 0; i < this.length; i++) {
    if(i=== 0 && typeof initialValue === "undefined"){
      continue;
    }
    result = callback(result, this[i], i, this);
  }
  return result;
};

const result = arr.customReduce((acc, item, index, arr) => {
  return acc + Number(item.age);
}, 0);
console.log(result);

// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

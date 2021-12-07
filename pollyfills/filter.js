const arr = [
  { name: "Mudit", age: "25" },
  { name: "Ankit", age: "26" },
  { name: "Rahul", age: "27" },
];

Array.prototype.customFilter = function (callback) {
  if (!callback || typeof callback !== "function") {
    throw Error("The callback is not function.");
  }
  if (!this) {
    throw Error("Can not call on null or undefined.");
  }
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)){
      newArr.push(this[i])
    };
  }
  return newArr;
};

const result = arr.customFilter((item, index, array) => {
  return index > 1;
});
console.log(result);

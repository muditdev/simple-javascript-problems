const arr = [
  { name: "Mudit", age: "25" },
  { name: "Ankit", age: "26" },
  { name: "Rahul", age: "27" },
];

Array.prototype.customMap = function (callback) {
  if (!callback || typeof callback !== "function") {
    throw Error("The callback is not function.");
  }
  if (!this) {
    throw Error("Can not call on null or undefined.");
  }
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

const result = arr.customMap((item, index, array) => {
  return { ...item, id: index };
});
console.log(result);

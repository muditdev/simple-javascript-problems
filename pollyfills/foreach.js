// foreach polyfill

const arr = [1, 2, 3];

Array.prototype.customForEach = function (callback) {
  if (!callback || typeof callback !== "function") {
    throw Error("The callback is not function.");
  }
  if (!this) {
    throw Error("Can not call on null or undefined.");
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.customForEach((item) => console.log(item));

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("new value to add: ", 0);
  };
}

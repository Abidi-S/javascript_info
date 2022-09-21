function isEmpty(obj) {
  for (let key in obj) {
    // if in loop, then at least one property exists
    // thus, obj not empty
    return false;
  }

  return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

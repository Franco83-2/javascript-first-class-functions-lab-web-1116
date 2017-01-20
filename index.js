countdown = (callback) => {
  window.setTimeout(callback,2000)
  }

createMultiplier = (multiplierValue) => {
    return multiplier = (n) => {
      return  n * multiplierValue
  }
}

multiplier = (a, b) => {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

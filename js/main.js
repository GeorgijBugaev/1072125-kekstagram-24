function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function checkLenght(checkedStr, maxLenght) {
  let result;
  if (checkedStr.length <= maxLenght) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

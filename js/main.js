function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function checkLength(checkedStr, maxLength) {
  return checkedStr.length <= maxLength;
}

getRandomInt(1, 2);
checkLength('string',100);

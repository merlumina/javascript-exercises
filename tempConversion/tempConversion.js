const ftoc = function(number) {
  let convertedNumber = Math.round(((number - 32) * 5 / 9) * 10) / 10;
  return convertedNumber;
}

const ctof = function(number) {
  let convertedNumber = Math.round(((number * 9 / 5) + 32) * 10) / 10;
  return convertedNumber;
}

module.exports = {
  ftoc,
  ctof
}

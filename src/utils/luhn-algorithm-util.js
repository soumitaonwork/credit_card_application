const validateCreditCard = module.exports;
// Luhn 10 Algorithm implementation to validate the credit card number
validateCreditCard.validateCreditCardNumber = (number) => {
  let result = 0;
  let digit = 0;
  let addend = 0;
  let timesTwo = false;
  if (number.length > 19 || number.length < 1) {
    return false;
  }
  for (let i = number.length - 1; i >= 0; i--) {
    digit = parseInt(number.charAt(i), 10);
    if (timesTwo) {
      addend = digit * 2;
      if (addend > 9) {
        addend -= 9;
      }
    } else {
      addend = digit;
    }
    result += addend;
    timesTwo = !timesTwo;
  }
  return result % 10 === 0;
};

function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let romanNumeral = "";

  for (let key in obj) {
    const [symbol, value] = obj[key];

    // Repeat the symbol until the value is less than or equal to the number
    while (value <= num) {
      romanNumeral += symbol;
      num -= value;
    }

    // Check for subtraction cases (e.g., IV, IX, etc.)
    if (num >= 0.9 * value) {
      const [nextSymbol, nextValue] = obj[key - 1];
      romanNumeral += nextSymbol + symbol;
      num -= (value - nextValue);
    }
  }

  return romanNumeral;
}

console.log(convertToRoman(5)); // Output: XXXVI

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

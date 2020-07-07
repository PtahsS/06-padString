

// Exercise 1 
function padString(string, len, symbol, flag) {
	let newString = "";
	let symbolCount = len - string.length;
	if (symbolCount <= 0) {
		return string;
	} else {
		if (symbol.length == 1) {
			if (flag) {
				newString = symbol.repeat(symbolCount) + string;
			} else {
				newString = string + symbol.repeat(symbolCount);
			}
		} else {
			throw new Error(" Enter 1 symbol as third argument")
		}
	}
	return newString;
}
console.log(padString('hello My World', 3, "0", true));
console.log(padString('hello My World', 36, "#", true));
console.log(padString('hello My World', 30, "@", false));
//console.log(padString('hello My World', 30, "@i", false));

module.exports = { padString };
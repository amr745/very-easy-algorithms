// Add up the Numbers from a Single Number

// function addUp(num) {
//     var res = (num * (num + 1)) / 2;
//     return res
// }

// console.log(addUp(600))

// Return a String as an Integer

// function stringInt(str) {
// 	return parseInt(str)
// }

// console.log(stringInt("6"))

//Sort an Array by String Length

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length)
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]))
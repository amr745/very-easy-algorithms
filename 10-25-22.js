//1. Find the Index (Part 1)

// function search(arr, item) {
// 	return arr.indexOf(item)
// }

// console.log(search([1, 2, 3], 4))

//2. Array Indexing

// function valueAt(arr, i) {
// 	return arr[Math.floor(i)]
// }

// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2))

//3. Find Out the Leap Year

function leapYear(year) {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

console.log(leapYear(2020))
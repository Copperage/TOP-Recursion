const container = document.querySelector('.container');

function fibs(num) {
	// create an array for numbers
	let arr = [0, 1];

	// loop through array
	for (let i = 0; i <= num; i++) {
		// make the next fibonacci number by adding the current two numbers in arr and then push it
		arr.push(arr[i] + arr[i + 1]);
	}

	// return the array onto html
	return arr;
}

function fibsRec(num) {
	if (num < 2) {
		return [0, 1];
	} else {
		const arr = fibsRec(num - 1);
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
		return arr;
	}
}

console.log(`Iteration: `, fibs(10));
console.log(`Recursion: `, fibsRec(10));

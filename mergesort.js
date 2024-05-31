function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex++]);
		} else {
			result.push(right[rightIndex++]);
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));

// pseudocode
// 1. split array into halves - d
// 	1.1. find the middle index - d
// 2. split each half and sort the array numbers -
// 3. merge the sorted halves back together -
// 4. return the merged and sorted array -

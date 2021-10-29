/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
   // mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function merge(left, right) {
//     let leftInd = 0
//     let rightInd = 0
//     let newarr = []
//     while (leftInd < left.length && rightInd < right.length) {
//         if (left[leftInd] > right[rightInd]) {
//             newarr.push(right[rightInd]);
//             newarr.push(left[leftInd]);
//         } else {
//             newarr.push(left[leftInd]);
//             newarr.push(right[rightInd]);
//         }

//         leftInd++;
//         rightInd++;
//         console.log(newarr)
//     }
//     return newarr
// }

let leftCounter = 0;
let rightCounter = 0;
newArr = [];
// SO START COMPARING THE VALUES IN THE LEFT AND RIGHT ARRAYS
while (leftCounter < left.length && rightCounter < right.length) {
        if (left[leftCounter] > right[rightCounter]) {
                // PUSH THE LOWER NUMBER INTO A NEW ARRAY
                newArr.push(right[rightCounter]);
                rightCounter++;
        } else {
                // PUSH THE LOWER NUMBER INTO A NEW ARRAY
                newArr.push(left[leftCounter]);
                leftCounter++;
        }
}
while (rightCounter < right.length) {
        newArr.push(right[rightCounter]);
        rightCounter++;
}
while (leftCounter < left.length) {
        newArr.push(left[leftCounter]);
        leftCounter++;
}
return newArr

/**
* Creates a new sorted array based on the given nums being recursively split
* and merged.
* Best: O(n log(n)) linearithmic.
* Avg: O(n log(n)) linearithmic.
* Worst: O(n log(n)) linearithmic.
* @param {Array<number>} nums
* @returns {Array<number>} A New sorted array.
*/
function mergeSort(nums) {
// BASE CASE
if (nums.length === 1) {
    return nums
}
// FORWARD PROGRESS
const middleIndex = Math.floor(nums.length / 2)
const leftArr = nums.slice(0, middleIndex)
const rightArr = nums.slice(middleIndex)
// RECURSIVE CALL
const sortedLeft = mergeSort(leftArr)
const sortedRight = mergeSort(rightArr)
return merge(sortedLeft, sortedRight)
}
console.log(mergeSort(numsRandomOrder))
//console.log(mergeSort(numsReversed))
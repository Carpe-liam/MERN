/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
    // FIND THE MIDDLE INDEX OF THE ARRAY
    const middleIdx = Math.floor((left + right)/2)
    // SAVE THE PIVOT VALUE
    const pivotVal = nums[middleIdx]
    // SAVE THE TEMP PIVOT INDEX(RIGHT BOUND)
    const tempPivotIndx= right
    // SWAP THE PIVOT AND RIGHT BOUND
    [nums[middleIdx], nums[tempPivotIndx]] = [nums[tempPivotIndx], nums[middleIdx]]

    while(true){
        // MOVE THE LEFT BOUND RIGHT, UNTIL WE FIND A NUMBER THAT IS GREATER THAN THE PIVOT VALUE
        while(nums[left] < pivotVal){
            left+=1
        }
        console.log("Left: " + left)

        // MOVE THE RIGHT BOUND LEFT, UNTIL WE FIND A NUMBER THAT IS LESS THAN THE PIVOT VALUE
        while(nums[right] > pivotVal) {
            right-=1
        }
        console.log("Right: " + right)

        // CHECK TO SEE IF THE LEFT AND RIGHT BOUND HAVE MET EACH OTHER OR GONE PAST
            // TEMP PIVOT INDEX AND SWAP WITH THE LEFT BOUND
            // RETURN THE LEFT INDEX
        if(left >= right) {
            [nums[pivotIndx], nums[left]] = [nums[left], nums[pivotIndx]]
            return nums[left]
        }

        // SWAP THE LEFT AND RIGHT BOUNDS
        [nums[left], nums[right]] = [nums[right], nums[left]]
        // MOVE YOUR LEFT BOUND RIGHT ONE INDEX
        left++
        // MOVE YOUR RIGHT BOUND LEFT ONE INDEX
        right--
    }
}

function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIndex = partition(nums, left, right);
        quickSort(nums, left, pivotIndex);
        quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
}

const newArr = [4, 7, 1, 8, 3, 9, 5, 6, 2, 0]

console.log(quickSort([4, 7, 1, 8, 3, 9, 5, 6, 2, 0]))
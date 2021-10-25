const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
    // CREATE A LOOP TO KEEP ON ITERATING THROUGH THE ARRAY MULTIPLES TIMES
    for(let i=0; i<nums.length; i++){
        // CREATE A LOOP TO ITERATE THROUGH THE ARRAY
        for (let x=0; x<nums.length-1; x++){
            // COMPARE THE ADJACENT VALUES
            if(nums[x]>nums[x+1]){
                // SWAP THE VALUES IF THE LEFT VALUE IS GREATER THAN THE RIGHT
                [nums[x], nums[x+1]] = [nums[x+1], nums[x]]
            }
        }
    }
    return nums;
}
// CHALLENEGE: AN EARLY EXIT IF YOUR ARRAY IS ALREADY SORTED

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));
//console.log(bubbleSort(numsRandomOrder));
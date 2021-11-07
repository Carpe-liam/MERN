/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, -2, 0];
const targetSum3 = 6;
const expected3 = [1, 5];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

// function twoSum(nums, targetSum) {
//     let sumIdx = []
//     for(i=0; i<nums.length; i++){
//         console.log("I: " + i);
//         for(x=1; x<nums.length; x++){
//             console.log("X: " + x);
//             if(i == x) {
//                 break;
//             }
//             if(nums[i] + nums[x] == targetSum){
//                 sumIdx.push(i, x)
//                 console.log("n[i]: " + nums[i]);
//                 console.log("n[x]: " + nums[x]);
//             }
//         }
//     }
//     return sumIdx;
// }
console.log(twoSum(nums1, targetSum1))

function twoSum(nums, targetSum) {
    let d = {}
    let diff
    for (let i = 0; i < nums.length; i++) {
        diff = targetSum - nums[i]
        if (diff in d) {
            return [d[diff], i]
        }
        d[nums[i]] = i
    }
}

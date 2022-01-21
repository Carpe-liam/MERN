/* 
Given two strings S and T containing only lowercase letters and "#" characters,
return if they are equal when both are typed into empty text editors.
# character means a backspace character.
i.e., after processing the backspaces, are the two strings equal?
Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */

function backspaceStringCompare(S, T) {
    stack1 = []
    stack2 = []
    S.split('').map((ele) => ele !== "#" ? stack1.push(ele) : stack1.pop())
    T.split('').map((ele) => ele !== "#" ? stack2.push(ele) : stack2.pop())
    if (stack1.length != stack2.length) {
        return false
    }
    for (let i = 0; i < stack1.length; i++) {
        if (stack1[i] != stack2[i]) {
            return false
        }
    }
    return true
}
/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    // parseInt() - trun a string into a int
    // isNan() - is Not a number

    let freq = {}
    let num = ""
    let letter = ""
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            num += s[i]
            if(freq[letter] && letter !== "") {
                freq[letter] += parseInt(num)
            } else {
                freq[letter] = parseInt(num)
            }
        }
        if (isNaN(parseInt(s[i]))){
            if(freq[letter] && letter !== "") {
                freq[letter] += parseInt(num)
            } else if (letter !== "") {
                freq[letter] = parseInt(num)
            }
            num = ""
            letter = s[i]
        } else {
            num += s[i]
        }
    }
    let expected = ""
    let keys = Object.keys(freq).sort()
    for (let i = 0; i < keys.length; i++) {
        expected += keys[i]
        expected += freq[keys[i]]
    }
    return expected
}
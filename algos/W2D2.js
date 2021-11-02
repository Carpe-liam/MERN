// const squareMatrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
// ];
// const expected1 = 2;
// /* 
// left to right diagonal: 1 + 5 + 9 = 15
// right to left diagonal: 3 + 5 + 9 = 17
// absolute difference = 2
// */

// const squareMatrix2 = [
// [1, 2, 3, 4, 5],
// [1, 2, 3, 4, 5],
// [1, 2, 3, 4, 5],
// [1, 2, 3, 4, 5],
// [1, 2, 3, 4, 5],
// ];
// const expected2 = 0;
// /* 
// left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
// right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
// absolute difference = 0
// */

// /**
//  * Calculates the absolute diagonal difference of a square matrix.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
//  *    a square matrix (rows and columns).
//  * @returns {number} Represents the absolute difference between the top left to
//  *    bottom right diagonal and the top right to bottom left diagonal.
//  */

/*
function diagonalDifference(sqrMatrix) {
    let count =0
    let upDwn = 0
    while(count<sqrMatrix.length && count != undefined) {
        upDwn+= sqrMatrix[count][count]
        count++
    }  
    let dwnUp = 0
    count =0
    let count2 = sqrMatrix.length-1

    while(count2 >= 0 && count2 != undefined) {
        dwnUp+= sqrMatrix[count2][count]
        // console.log(dwnUp)
        count2-- 
        count++
    }
    return Math.abs(dwnUp-upDwn)
}

function diagonalDifference(sqrMatrix) {
    let leftR, rightL = 0
    for (let i=0; i<sqrMatrix.length; i++) {
        leftR += sqrMatrix[i][i]
        rightL += sqrMatrix[i][sqrMatrix.length -1 -i]
    }
    return Math.abs(leftR - rightL)
}


*/

// console.log(diagonalDifference(squareMatrix1))
// console.log("+++++++++++++++++++++++++")
// console.log(diagonalDifference(squareMatrix2))





const numsA1 = [1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const numsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB2 = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    const union = [];
    let idxA = 0;
    let idxB = 0;
    while (idxA < sortedA.length || idxB < sortedB.length) {
        if (idxA === sortedA.length) {
// sortedB is longer, push in all remaining sortedB nums
        union.push(sortedB[idxB++]);
        continue;
        } else if (idxB === sortedB.length) {
// sortedA is longer, push in remaining sortedA nums
        union.push(sortedA[idxA++]);
        continue;
        }

        if (sortedA[idxA] === sortedB[idxB]) {
        union.push(sortedA[idxA++]);
        idxB++; // since both were same, increment both
        } else if (sortedA[idxA] < sortedB[idxB]) {
        union.push(sortedA[idxA++]);
        } else {
        union.push(sortedB[idxB++]);
        }
    }
    return union;
}


orderedMultisetUnion(numsA1, numsB1)
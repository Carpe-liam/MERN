// const numsA = [0,1,2,2,2,7]
// const numsB = [2,2,6,6,7]
// // expected [2,7]

// function orderedIntersection(sortA, sortB) {
//     const intersect = []
//     let long = 0
//     if(sortA.length > sortB.length){
//         long = sortA.length
//     } else {
//         long = sortB.length
//     }
    
//     let index = 0
//     let start = 0
//     console.log(long)
//     let count= 0
//     while(start < long) {
//         console.log("S: " + start + " L: " + long)
//         console.log("Count: " + count)

//         while(index < long) {
//             //console.log("I: " + index)

//             if (sortA[start] === sortB[index]) {
//                 console.log("sortA: " + sortA[index])
//                 console.log("sortB: " + sortB[index])
//                 intersect.push(sortA[start])
//                 index++
//                 start++
//             } else {
//                 index++
//             }
//         }
//         index =0
//         start++ 
//         count++
//     }
//     return intersect
// }

// console.log(orderedIntersection(numsA, numsB))


const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

// /**
//  * Venn Diagram Visualization (bottom):
//  * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} sortedA
//  * @param {Array<number>} sortedB Both sets are multisets
//  *    (multi in that it can contain multiple dupes).
//  * @returns {Array<number>} The sorted set intersection: a new array that is
//  *    sorted and contains only the shared values between the two arrays
//  *    deduped.
//  */
// function orderedIntersection(sortedA, sortedB) {
//     // CHALLENGE: COMPLETE THE ALGO USING ONLY ONE NEW ARRAY
//     let intersect = []
//     for(let i=0; i<sortedA.length; i++) {
//         for(let x=0; x<sortedB.length; x++) {
//             if(sortedA[i] == sortedB[x] && intersect[intersect.length-1] != sortedB[x]){
//                 intersect.push(sortedB[x])
//             }
//         }
//     }
//     return intersect;
// }

// console.log(orderedIntersection(numsA1, numsB1));
// console.log(orderedIntersection(numsA2, numsB2));
// console.log(orderedIntersection(numsA3, numsB3));


function orderedIntersection(sortedA, sortedB) {
    let venn = sortedB.filter(num => sortedA.includes(num));
    return [...new Set(venn)];
}
console.log(orderedIntersection(numsA1, numsB1))
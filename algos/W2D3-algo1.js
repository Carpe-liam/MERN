const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */


function measureWaterLevelsTristan(waterLevels) {
    let change = 0;
    let biggestChange = 0;
    for (let i = 0; i < waterLevels.length; i++) {
        if (waterLevels[i] < waterLevels[i + 1]) {
                    change += (waterLevels[i + 1] - waterLevels[i]);
        }
        if (waterLevels[i] > waterLevels[i + 1]) {
                    change = 0;
        }
        if (change > biggestChange) {
                    biggestChange = change;
        }
    }
    if (biggestChange == 0) {
        return -1
    }
    return biggestChange;
}

function measureWaterLevelsSal(waterLevels) {
    let small;
    let big = -1;
    for (let i = 0; i < waterLevels.length - 1; i++) {
        if (waterLevels[i] < waterLevels[i+1] && small == undefined) {
            small = waterLevels[i]
        }
        if (waterLevels[i] > waterLevels[i+1] && small != undefined) {
            if (waterLevels[i] - small > big) {
                big = waterLevels[i] - small
                small = undefined
            }
        }
    }
    if (small != undefined) {
        if (waterLevels[waterLevels.length - 1] - small > big) {
            big = waterLevels[waterLevels.length - 1] - small
            small = undefined
        }
    }
    return big
}

measureWaterLevels(riverLevels1)
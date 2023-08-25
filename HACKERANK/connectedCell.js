'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'connectedCell' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function connectedCell(matrix) {
    // Write your code here
    const n = matrix.length;
    const m = matrix[0].length;
    let maxRegion = 0;

    function exploreRegion(row, col) {
        if (row < 0 || row >= n || col < 0 || col >= m || matrix[row][col] === 0) {
            return 0;
        }

        matrix[row][col] = 0; // Mark the cell as visited
        let size = 1; // Count the current cell in the region

        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr !== 0 || dc !== 0) {
                    size += exploreRegion(row + dr, col + dc);
                }
            }
        }

        return size;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 1) {
                const regionSize = exploreRegion(i, j);
                maxRegion = Math.max(maxRegion, regionSize);
            }
        }
    }

    return maxRegion;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    let matrix = Array(n);

    for (let i = 0; i < n; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    const result = connectedCell(matrix);

    ws.write(result + '\n');

    ws.end();
}
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const table = Array.from({length: m}, () => new Array(n));  // creates our mxn grid
    
    // Fill the initial values
    for(let i = 0; i < table.length; i++){
        table[i][0] = 1;
    }
    for(let i = 0; i < table[0].length; i++){
        table[0][i] = 1;
    }
    
    // Traverse and fill empty cells
    for(let i = 1; i < table.length; i++){
        for(let j = 1; j < table[i].length; j++){
            table[i][j] = table[i-1][j] + table[i][j-1];
        }
    }
    return table[m-1][n-1];   // returns the end corner
};
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeros = (r, c, matrix) => {
    for(let i = 0; i < matrix.length; i++){
        matrix[i][c] = 0;  //set entire col zero
    }
    for(let i = 0; i < matrix[0].length; i++){
        matrix[r][i] = 0;  //set entire row zero
    }
}

var setZeroes = function(matrix) {
    const zeros = [];
    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[0].length; c++){
            if(matrix[r][c] === 0){
                zeros.push([r,c]);  //find the positions of zero in the matrix
            }
        }
    }
    for(let address of zeros){
        let row = address[0];
        let col = address[1];
        setZeros(row, col, matrix);   //for each zero set row and col zero
    }
};
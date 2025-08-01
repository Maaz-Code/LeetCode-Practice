function generate(numRows: number): number[][] {;
    const triangle = [];
    if(numRows === 0){ 
        return [];
    }
    const firstRow = [1];
    triangle.push(firstRow);
    if(numRows === 1){
        return triangle;
    }

    for(let i = 1; i < numRows; i++){
        const prevRow = triangle[i-1];
        const row = [];
        row.push(1);
        for(let j = 1; j < i; j++){
            const el = prevRow[j-1] + prevRow[j];
            row.push(el);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};
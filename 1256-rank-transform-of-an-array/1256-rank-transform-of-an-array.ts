function arrayRankTransform(arr: number[]): number[] {
    const n = arr.length;
    const temp = [...arr];
    
    arr.sort((a, b) => a - b);
    const mapX = new Map<number, number>();
    
    let index = 1;
    for(const num of arr){
        if(!mapX.has(num)){
            mapX.set(num, index++);
        }
    }
    
    const result = temp.map(num => mapX.get(num) as number);
    return result;
};
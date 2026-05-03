function mirrorDistance(n: number): number {
    let reverse = Number(n.toString().split('').reverse().join(''));
    return Math.abs(n - reverse);
};
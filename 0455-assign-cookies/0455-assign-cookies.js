/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let n = g.length;
    let m = s.length;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let child = 0;
    let cookie = 0;

    while (child < n && cookie < m) {
        if (g[child] <= s[cookie]) {
            child++; // assign cookie to child
        }
        cookie++; // try next cookie either way
    }

    return child; // number of content children
};
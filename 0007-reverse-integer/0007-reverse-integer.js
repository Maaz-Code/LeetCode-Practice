/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x < 0) {
    return -1 * reverse(-x);
  }
  let sol = (x+"").split('').reverse().join('');
  return (sol > 2**31 - 1) ? 0 : parseInt(sol);
};
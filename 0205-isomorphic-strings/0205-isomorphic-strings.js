/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if((s.length == 0 || t.length == 0) || (s.length !== t.length)){
        return false;
    }
    let a = new Map();
    let b = new Map();

    for(let i = 0; i < s.length; i++){
        let x = s[i];
        let y = t[i];

        if((a.has(x) && a.get(x) !== y) || (b.has(y) && b.get(y) !== x)){
            return false;
        }

        a.set(x,y);
        b.set(y,x);
    }

    return true;
};
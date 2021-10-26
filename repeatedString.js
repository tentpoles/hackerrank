function repeatedString(s, n) {
    const numOfRepeats = Math.floor( n / s.length );
    const remainderString = n % s.length;
    let matches = (s.match(/a/g) || [] ).length;
    matches = matches * numOfRepeats;
    const remainderMatches = (s.substring(0,remainderString).match(/a/g) || [] ).length;
    return matches + remainderMatches;
}
let s = 'abb';
let n = 10;
let test = repeatedString(s, n);
console.log(test);
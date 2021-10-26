function countMax(upRight) {
    let minRow = upRight.length;
    let minCol = upRight.length;
    for (let str of upRight) {
        let r = str.split(" ")[0];
        let c = str.split(" ")[1];
        minRow = Math.min(minRow, r);
        minCol = Math.min(minCol, c);
    }
    let result = minRow * minCol;
    return result;
}
//Sampe test case
let a = countMax(["1 4", "2 3", "1 4"]);
console.log(a);
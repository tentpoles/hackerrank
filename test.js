// const anagram = (a, b) => {
//     let aSplit = a.split("");
//     let bSplit = b.split("");
//     let aFirstLength = aSplit.length;
//     let bFirstLength = bSplit.length;
//     aSplit = [...new Set(aSplit)];
//     bSplit = [...new Set(bSplit)];
//     for(let i = 0; i < aFirstLength; i++) {
//         for(let x = 0; x < bFirstLength; x++) {
//             if(a.indexOf(bSplit[x]) == -1) {
//                 bSplit.splice(x, 1);
//             }
//             if(b.indexOf(aSplit[i]) == -1) {
//                 aSplit.splice(i, 1);
//             }
//         }
//     }
//     let deletedItems = (aFirstLength - aSplit.length) + (bFirstLength - bSplit.length);
//     return {aSplit, bSplit, deletedItems};
// }

const anagram = (a, b) => {
    let aFirstLength = a.length;
    let bFirstLength = b.length;
    let aSplit = [...new Set(a.split(""))];
    let bSplit = [...new Set(b.split(""))];
    for(let i = 0; i < aFirstLength; i++) {
        for(let x = 0; x < bFirstLength; x++) {
            if(a.indexOf(bSplit[x]) == -1) {
                bSplit.splice(x, 1);
            }
            if(b.indexOf(aSplit[i]) == -1) {
                aSplit.splice(i, 1);
            }
        }
    }
    let deletedItems = (aFirstLength - aSplit.length) + (bFirstLength - bSplit.length);
    return {aSplit, bSplit, deletedItems};
}

const a = "fcrxzwscanmligyxyvym";
const b = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";
console.log(anagram(a, b));


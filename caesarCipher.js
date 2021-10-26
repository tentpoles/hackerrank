const rot13 = (str) => {
    const match = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const arrText = str.split("");
    let decrypt = '';
    for(let i = 0; i < str.length; i++) {
        let indexAwal = match.indexOf(arrText[i]);
        let indexAkhir = (indexAwal + 13) % 26;
        indexAwal != -1 ? decrypt += match[indexAkhir] : decrypt += arrText[i];
    }
    console.log(decrypt);
}
  
rot13("SERR PBQR PNZC");
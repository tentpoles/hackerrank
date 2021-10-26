const checkString = (str1, str2) => {
    // str1.includes(str2) ? console.log("Ada") : console.log("Tidak ada!");
    let arrText = str1.split(" ");
    let hasil = '';
    for(let i = 0; i < arrText.length; i++) {
        if(arrText[i] == str2) {
            hasil = 'Ada';
            break;
        }
        else {
            hasil = 'Tidak ada!';
        }
    }
    console.log(hasil);
}

checkString("Hello there i was born to be wild", "wilds");
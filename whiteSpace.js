const solutions = (text) => {
    let clearText = text.replace(/\n/g, ' \n ');
    let arrText = clearText.split(" ");
    for (let i = 0; i < arrText.length; i++) {
        arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].toLowerCase().slice(1);
    }
    let resultText = arrText.join(" ");
    return resultText;
}
//Sampe test case
let test = solutions("BIODATA INTERVIEW\n\nNAMA : BHIMA AL KAUTSAR\nSEKOLAH : BACHELOR OF DEGREE UNIVERSITY OF AMIKOM YOGYAKARTA\nTANGGAL DAN JAM : 7/12/2021 15:22:32\n\nPROGRAMMING LANGUAGES : PHP, GO, JAVASCRIPT, SQL, PYTHON, RUBY, CSS, HTML, FRAMEWORK DLL(VUE JS, CODEIGNITER, RUBY ON RAILS, JQUERY, BOOTSTRAP, MYSQL, WORDPRESS) GOOGLE SERVICE(FIREBASE, GOOGLE ANALYTICS, BIGQUERY) VCS(GIT, GITLAB)\nTERIMA KASIH");
console.log(test);


// const solutions = (str) => {
//     let clearText = str.toLowerCase().replace(/\s+/g, ' ').trim();
//     let arrText = clearText.split(" ");
//     for (let i = 0; i < arrText.length; i++) {
//         arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1);
//     }
//     let resultText = arrText.join(" ");
//     return resultText;
// }
// //Sampe test case
// let a = solutions("BIODATA INTERVIEW\n\nNAMA: NAMA SAYA\nSEKOLAH : BACHELOR OF DEGREE UNIVERSITY OF INDONESIA\nTANGGAL DAN JAM: 7/12/2021 15:22:32\n\nPROGRAMMING LANGUAGES: PHP, GO, JAVASCRIPT, SQL, PYTHON, RUBY, CSS, HTML, FRAMEWORK DLL(VUE JS, CODEIGNITER, RUBY ON RAILS, JQUERY, BOOTSTRAP, MYSQL, WORDPRESS) GOOGLE SERVICE(FIREBASE, GOOGLE ANALYTICS, BIGQUERY) VCS(GIT, GITLAB)\nTERIMA KASIH");
// console.log(a);

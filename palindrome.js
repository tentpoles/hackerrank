const palindrome = (text) => {
    let status;
    let textArr = text.split("");
    let length = textArr.length-1;
    for(let i = 0; i < length/2; i++) {
        if(textArr[i] == textArr[length-i]) {
            console.log(textArr[i], " = ", textArr[length-i], " = True")
            status = "Palindrome";
        }
        else {
            console.log(textArr[i], " = ", textArr[length-i], " = False")
            status = "Not Palindrome";
            break;
        }
    }
    console.log(status);
    return status;
    // let reverseText = text.split('').reverse().join('');
    // reverseText == text ? console.log("Palindrome") : console.log("Not Palindrome")
    // return reverseText;
}
let test = palindrome("aabasdasdasdasdbaa");
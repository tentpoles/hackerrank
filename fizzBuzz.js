const fizzBuzz = (number) => {
    let text;
    for(let i = 1; i < number; i++) {
        if(i % 3 == 0 && i % 5 === 0) {
            text = "FizzBuzz";
            console.log(text);
        }
        else if(i % 3 == 0) {
            text = "Fizz";
            console.log(text);
        }
        else if(i % 5 == 0) {
            text = "Buzz";
            console.log(text);
        }
        else {
            console.log(i)
        }
    }
    return text;
}
const coba = fizzBuzz(100);
console.log(coba)
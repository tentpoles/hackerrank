const obj = {
    "account-0-firstName": "John",
    "account-0-lastName": "Doe",
    "account-1-firstName": "Hello",
    "account-1-lastName": "World",

    "address-0-city": "Surabaya",
    "address-0-district": "Gubeng",
    "address-1-city": "Surabaya",
    "address-1-district": "Wonokromo",

    "dob-0-place": "Surabaya",
    "dob-0-date": "1989-12-01",
    "dob-1-place": "Surabaya",
    "dob-1-date": "1998-01-19"
};

// const expectedResult = {
//     account: ["John Doe", "Hello World"],
//     address: ["Surabaya Gubeng", "Surabaya Wonokromo"],
//     dob: ["Surabaya 1989-12-01", "Surabaya 1998-01-19"]
// };

let tempAccount = [];
let tempAddress = [];
let tempDob = [];

for (let index = 0; index < Object.keys(obj).length; index++) {
    if(obj.hasOwnProperty(`account-${index}-firstName`) && obj.hasOwnProperty(`account-${index}-lastName`)) {
        tempAccount = [...tempAccount, obj[`account-${index}-firstName`] + ' ' + obj[`account-${index}-lastName`]];
        delete obj[`account-${index}-firstName`];
        delete obj[`account-${index}-lastName`];
    }
    if(obj.hasOwnProperty(`address-${index}-city`) && obj.hasOwnProperty(`address-${index}-district`)) {
        tempAddress = [...tempAddress, obj[`address-${index}-city`] + ' ' + obj[`address-${index}-district`]];
        delete obj[`address-${index}-city`];
        delete obj[`address-${index}-district`];
    }
    if(obj.hasOwnProperty(`dob-${index}-place`) && obj.hasOwnProperty(`dob-${index}-date`)) {
        tempDob = [...tempDob, obj[`dob-${index}-place`] + ' ' + obj[`dob-${index}-date`]];
        delete obj[`dob-${index}-place`];
        delete obj[`dob-${index}-date`];
    }
}

Object.assign(obj, {account: tempAccount, address: tempAddress, dob: tempDob});
console.log(obj);
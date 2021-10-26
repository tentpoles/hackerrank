function manipulateStudentRecord(obj, operation, prop, newValue) {
    if (operation === 'delete') {
        if (obj && obj.hasOwnProperty(prop)) {
            delete obj[prop];
        }
        return obj;
    } 
    else if (operation === 'edit') {
        if (obj && obj.hasOwnProperty(prop)) {
            obj[prop] = newValue;
            return obj;
        } 
        else {
            return obj;
        }
    }
}
// object or input
const obj = {
    name: 'John',
    lastName: 'Bliss',
    city: 'Florida'
}
// sample case 1
// const data = manipulateStudentRecord(obj, "delete", "city", "Seattle")
// sample case 2
const data = manipulateStudentRecord(obj, "edit", "lastName", "Owalah");
// collections object
console.log('Input:');
Object.keys(data).forEach(key => {
    console.log(key, data[key]);
});
console.log();
// output
console.log('Result:');
console.log(obj);
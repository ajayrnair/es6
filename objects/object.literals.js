const prop1 = 1;
const prop2Name = 'prop2';
const object1 = {
    prop1, // assigns value from prop1 in the scope
    method1() {
        // this here is object1
    },
    [prop2Name]: 'prop2Value' // prop name is value of prop2Name
}
console.log(object1); // {prop1: 1, method1: ƒ, prop2: "prop2Value"}
// Object.freeze
const frozenObject = {a:1};
Object.freeze(frozenObject);
frozenObject.a = 2;
console.log(frozenObject); //{a: 1} - object does not change value

// Object.getPrototypeOf returns the prototype of an object

// Object.setPrototypeOf sets the prototype of an object 
const parent = {sound(){console.log('parent');}}
const child = {sound(){console.log('hello from child'); super.sound();}}
Object.setPrototypeOf(child, parent);
child.sound(); // hello from child \n parent

// super in a method (cannot be used inside functions only methods in object literal and classes)
// super points to prototype
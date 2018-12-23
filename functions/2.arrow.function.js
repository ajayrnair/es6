/*
 * Arrow functions borrow 'this' from the containing parent (global if arrow function is not contained)
 * Cannot change "this" using bind either
 * Cannot be called using new
 * No new.target, super, arguments
 * When not to use arrow function?
 *  - within object literal, the property function should not be arrow since 'this' will be containing parent
 */

 // property function in an object literal
 const object1 = {
    prop1: 1,
    method1: () => {
        console.log(this); // window object
    }
 };

 // instead
 const object2 = {
     prop1: 1,
     method1() {
         console.log(this); // object2
     }
 }
/*
 * Functions
 */

// default values: when undefined is passed, default value is assigned
function defaultParams(param1, param2 = 5, param3) {
    console.log(`${param1},${param2},${param3}`);
}
defaultParams(1,2,3); // 1,2,3
defaultParams(1,null); // 1,null,undefined - null is not undefined, 
                       // it is assigned to param2 and default value is not used
defaultParams(1,undefined,3); // 1,5,3


/*
 * arguments of function
 */

 // arguments reflect what was passed, not default or reassigned values
function functionArguments(param1, param2 = 'defaultValue') {
    param1 = 'param1';
    param2 = 'param2';
    console.log(arguments);
}
functionArguments(); // empty
functionArguments(1,2); // 1,2
functionArguments(1); 1 // defaultValue is not typed in since argument shows only what was passed

// bind is like appending to function params, it shows up in arguments
functionArguments.bind(window, 1,2)(); 1,2


/*
 * ...rest(while declaring function) and ...spread (while calling function) operators
 */

// rest params: can have only 1 rest param and it has to be last
function restParam(param1, param2, ...restParams) {
    // arguments is just like called
}

// spread params: while calling function, we can spead an iterable into function arguments
function calledBySpread(arg1, arg2, ...args) {
    console.log(arg1, arg2, args);
}
calledBySpread(...[1,2,3]); // 1,2,3


// rest params are ARRAYS but argument is only an iterable. use Array.from(arguments) to get array

/*
 * new.target -> in a function reflects the function with which "new" was called. It is undefined if new not used
 */

// Case 1: new not used
function noNewUsed() {
    console.log(new.target);
}
noNewUsed(); // undefined

// Case 2: new used
function newUsed() {
    console.log(new.target);
}

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

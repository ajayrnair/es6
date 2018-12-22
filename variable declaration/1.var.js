/*
 * a) var is either defined in global scope or function scope
 * b) It does not have block scope i.e. when a variable 
 *    is declared using var within an if or for loop, the variable exists
 *    outside the scope as well.
 * c) Redeclaration is allowed and it over writes the previous value
 * d) var faces what is called as hoisting
 * e) Closure effects
 */

 // Redeclaration
 var globalVariable = 'globalVariable'
 console.log(`globalVariable first declaration: ${globalVariable}`); // globalVariable
 var globalVariable = 'overWrittenGlobalVariable';
 console.log(`globalVariable after re-declaration: ${globalVariable}`); // overWrittenGlobalVariable
 var globalVariable;
 console.log(`globalVariable after second re-declaration without value: ${globalVariable}`); // overWrittenGlobalVariable

// Scoped within function
 function scopingFunction() {
     var scopedVariable = 'scopedVariable';
     console.log(`scopedVariable within scopingFunction: ${scopedVariable}`);
 }
 scopingFunction(); // scopedVariable
 try {
    console.log(`scopedVariable outside of scopingFunction: ${scopedVariable}`); // Causes error no output on this line
 } catch(e) {
     console.log('Error: Tried accessing scopedVariable outside scopingFunction'); // Prints this line
     // Avoid error thrown for undefined variable scopedVariable
 }

 // No scope within a block - if or for. It takes the global scope OR is scoped within the function where the block exists
 for(var age = 0; age < 10; age++) {
     age++;
 }
 console.log(`Age after the for block: ${age}`); // 10

 // hoisting
 function hoistingVar() {
     console.log(`Accessing scopedVariable before declaration: ${scopedVariable}`); // Does not throw error, it has value undefined however
     var scopedVariable = 'scopedVariable';
     console.log(`Access scopedVariable after declaration: ${scopedVariable}`); // scopedVariable
 }
 hoistingVar();


// Closure effect
for(var index = 0; index < 10; index++) {
    window.setTimeout(function(){
        console.log(index); // prints 10, 10 times due to closure
    }, 1000);
}
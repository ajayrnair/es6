/*
 *  a) let and const have only one difference: const does not let you reassign values after declaration, 
 *  where it is necessary to pass a value.
 *  b) let and const do not create a property on window when they are created within the global scope
 *  c) let and const have global, function and block scopes.
 *  d) Using const in for loops is a bad idea! Redeclares in second iteration and throws error.
 *  e) Closure effect
 *  f) No hoisting, but there is Temporal Dead Zone (from beginning of scope to the declaration where the
 *     variable cannot be accessed.)
 */

 // No redeclaration for let or const
 try {
    let noRedeclaration = 'noRedeclaration';
    let noRedeclaration = 'redeclaration?' // results into error, even if initial declaration was with var
 } catch(e) {
     console.log('Variable cannot be redeclared with let or const. Even with var, in any order of let and var');
 }

 // Does not create a property on window
 const noPropertyOnWindow = 'noPropertyOnWindow';
 console.log(noPropertyOnWindow); // noPropertyOnWindow
 console.log(window.noPropertyOnWindow); // undefined

 // function scope
 function scopingFunction() {
     let letVariable = 'letVariable';
     const constVariable = 'constVariable';
     console.log(`letVariable within scopingFunction: ${letVariable}`);
     console.log(`constVariable within scopingFunction: ${constVariable}`);
 }
 scopingFunction();
 try {
    console.log(`letVariable outside scopingFunction: ${letVariable}`);
    console.log(`constVariable outside scopingFunction: ${constVariable}`);
 } catch(e) {
    console.log('Error thrown since both variables are not available outside the scopingFunction');
 }

 // block scope
 for(let age = 10; age < 10; age++) {
     // Some code
 }
 try {
    console.log(`age outside the for loop: ${age}`);
 } catch(e) {
     console.log('Error since age is not available outside the for block when using let or const');
 }

 // Const required a value to be specified during declaration. let does not.
 try {
    let noDeclarationForLet; // no error
    const noDeclarationForConst; // results in error
 } catch(e){
    console.log('Error while declaring noDeclarationForConst since const ' +
        'requires a value to be specified during declaration');
 }

 // Cannot change value for const. Can change value for let.
 try {
    const noValueChange = 'noValueChange';
    noValueChange = 'newValue';
 } catch(e) {
    console.log('Throws error when noValueChange is assigned newValue');
 }

 //Can change properties of an object defined by const
 const object = {existingProperty: 'existingProperty'};
 object.existingProperty = 'newValueForExistingProperty';
 object.newProperty = 'newProperty';
 console.log(object); // {existingProperty: "newValueForExistingProperty", newProperty: "newProperty"}

 // Closure effect
 for(let index = 0; index < 10; index++) {
     window.setTimeout(function(){
         console.log(index); // prints 0,1,2,...,9. let and const are like invoking IIFE
     }, 1000);
 }

 // No hoisting, but Temporal Dead Zone
 function temporalDeadZone() {
     console.log(`tdzVariable: ${tdzVariable}`);
     let tdzVariable = 'declaredAfterAccessing';     
 }
 try {
    temporalDeadZone();
 } catch(e) {
    console.log('function call throws error since variable is accessed in temporal dead zone');
 }
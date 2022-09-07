"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved`;
    //myFunction type is a function that returns a number
    // let myFunction: (z: number, y: number) => number;
    let myFunction;
    //! myFunction = 10;
    //! console.log(myFunction)
    // myFunction = addNumbers
    // console.log(myFunction(1, 2))
    myFunction = greet;
    console.log(greet('flportilla'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();

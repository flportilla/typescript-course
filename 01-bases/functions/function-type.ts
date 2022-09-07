(() => {

    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = (): string => `The world is saved`;

    //myFunction type is a function that returns a number
    // let myFunction: (z: number, y: number) => number;
    let myFunction: (y: string) => string;

    //! myFunction = 10;
    //! console.log(myFunction)

    // myFunction = addNumbers
    // console.log(myFunction(1, 2))

    myFunction = greet
    console.log(greet('flportilla'))

    myFunction = saveTheWorld
    console.log(saveTheWorld())
})()
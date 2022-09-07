(() => {

    //three different ways to create a string
    const batman: string = 'Batman';
    const greenLarntern: string = "Green Larntern";
    const blackCanary: string = `Hero: Black Canary`;

    const abc = 123;

    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'Not present');

})()
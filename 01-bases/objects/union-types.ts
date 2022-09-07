(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustoVar: (string | number | Hero) = 'Flportilla';
    console.log(typeof myCustoVar)

    myCustoVar = 25;
    console.log(typeof myCustoVar)

    myCustoVar = {
        name: 'Bruce',
        age: 43,
        powers: ['strength']
    };
    console.log(typeof myCustoVar)
    console.log(myCustoVar)

})()
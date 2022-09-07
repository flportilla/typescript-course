(() => {

    type Avengers = {

        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;

    };

    const avengers: Avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 1500.231321132
    };

    // const { power, vision } = avengers

    // console.log(power, vision.toUpperCase())

    const printAventer = ({ vision, ...rest }: Avengers) => {
        console.log(vision, rest)
    };

    // printAventer(avengers)


    const avengersArr: [string, boolean, number] = ['Ms. Marvel', true, 2.0];

    const [miss, leBool, num] = avengersArr;

    console.log({ leBool });

})()
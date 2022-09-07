(() => {

    let flash: {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'time travel']
    };
    let superman: {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    } = {
        name: 'Clark',
        age: 60,
        powers: ['speed', 'time travel']
    };

    // flash = {
    //     name: 'clark',
    //     age: 60,
    //     powers: ['super'],
    //     getName() {
    //         return this.name
    //     }
    // }

})()
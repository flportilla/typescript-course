(() => {


    let isSuperman: boolean = true;
    let isBatman: boolean = false

    //not allowed string ofor a boolean type
    // isSuperman = (isBatman) ? 'abc' : 'xyz'
    // isSuperman = (isBatman) ? true : 'false'

    isSuperman = (isBatman) ? true : false

    console.log({ isSuperman })

})()
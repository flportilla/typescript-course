"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('we are in trouble');
    }
    else {
        console.log('we are saved');
    }
    //NaN is also considered as a number, that's why it doens't show any errors
    avengers = Number('asd');
    console.log({ avengers });
})();

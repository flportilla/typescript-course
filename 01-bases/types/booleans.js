"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    //not allowed string ofor a boolean type
    // isSuperman = (isBatman) ? 'abc' : 'xyz'
    // isSuperman = (isBatman) ? true : 'false'
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();

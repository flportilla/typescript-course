"use strict";
(() => {
    const hero = 'Flash';
    const returnName = () => {
        return hero;
    };
    console.log(typeof returnName);
    const heroName = returnName();
})();

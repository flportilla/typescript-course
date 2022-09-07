"use strict";
(() => {
    //optional args are always the last or add a default value
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName}${lastName || '---'}`.toUpperCase();
        }
        return `${firstName}${lastName || '---'}`;
    };
    const name = fullName('tony', 'stark', true);
    console.log({ name });
})();

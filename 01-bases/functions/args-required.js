"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Name required');
        }
        return `${firstName}${lastName}`;
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();

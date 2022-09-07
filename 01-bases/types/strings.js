"use strict";
(() => {
    var _a;
    //three different ways to create a string
    const batman = 'Batman';
    const greenLarntern = "Green Larntern";
    const blackCanary = `Hero: Black Canary`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Not present');
})();

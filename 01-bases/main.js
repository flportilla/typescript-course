"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 1500.231321132
    };
    const printAventer = (_a) => {
        var { vision } = _a, rest = __rest(_a, ["vision"]);
        console.log(vision, rest);
    };
    const avengersArr = ['Ms. Marvel', true, 2.0];
    const [miss, leBool, num] = avengersArr;
})();
(() => {
    const ironMan = {
        name: 'IronMan',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'El capi',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironMan, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const name = 'Fabian';
    const getName = () => {
        console.log(name);
    };
})();
//# sourceMappingURL=main.js.map
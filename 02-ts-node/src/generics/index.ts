import { genericArrowFunction, genericFunction, printObject } from './generics';
import { Villain, Hero } from '../interfaces';

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject('Hello World');

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Hello World').toUpperCase());
// console.log(genericFunction(new Date()).toDateString());

// console.log(genericArrowFunction('helo'))

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log(genericArrowFunction<Villain>(deadpool))
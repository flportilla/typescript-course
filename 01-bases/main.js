"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Power;
    (function (Power) {
        Power[Power["acuaman"] = 0] = "acuaman";
        Power[Power["batman"] = 1] = "batman";
        Power[Power["flash"] = 5] = "flash";
        Power[Power["superman"] = 100] = "superman";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.flash;
    const fuerzaSuperman = Power.superman;
    const fuerzaBatman = Power.batman;
    const fuerzaAcuaman = Power.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const msg = 'Hello world';
const radicalDreamers = {
    name: 'kid',
    age: 14
};
console.log(radicalDreamers.age + 1);
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName}${lastName || '---'}`.toUpperCase();
        }
        return `${firstName}${lastName || '---'}`;
    };
    const name = fullName('tony', 'stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}${lastName || '---'}`;
    };
    const name = fullName('tony');
    console.log({ name });
})();
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
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved`;
    let myFunction;
    myFunction = greet;
    console.log(greet('flportilla'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
(() => {
    const hero = 'Flash';
    const returnName = () => {
        return hero;
    };
    console.log(typeof returnName);
    const heroName = returnName();
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'time travel']
    };
    let superman = {
        name: 'Clark',
        age: 60,
        powers: ['speed', 'time travel']
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'time travel']
    };
    let superman = {
        name: 'Clark',
        age: 60,
        powers: ['speed', 'time travel'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustoVar = 'Flportilla';
    console.log(typeof myCustoVar);
    myCustoVar = 25;
    console.log(typeof myCustoVar);
    myCustoVar = {
        name: 'Bruce',
        age: 43,
        powers: ['strength']
    };
    console.log(typeof myCustoVar);
    console.log(myCustoVar);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23654654;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villains = ['Omega red', 'Dormammu', 'Green goblin'];
    villains.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Help');
    const example = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    example('Help');
})();
(() => {
    const isActive = undefined;
    console.log(isActive);
})();
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
    avengers = Number('asd');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const greenLarntern = "Green Larntern";
    const blackCanary = `Hero: Black Canary`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Not present');
})();
(() => {
    const hero = ['Dr. Strange', 100, true];
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    ;
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map
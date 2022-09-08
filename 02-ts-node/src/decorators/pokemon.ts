
function printToConsole(constructor: Function) {
    // console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) return printToConsole
    return () => { }
}

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                throw new Error('The id of the Pokemon should be between 1 and 800');

            }
            else {
                return originalMethod(id)
            }
        }

        // descriptor.value = () => {
        //     return console.log('hello')
        // }
    }
}


function readOnly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {

        const descriptor: PropertyDescriptor = {

            get() {
                console.log(this)
                return 'Flportilla'
            },

            set(this, val) {
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }

        }

        return descriptor

    }
}


@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    @readOnly(false)
    public publicApi: string = 'http://pokeapi.com'
    constructor(
        public name: string
    ) { }


    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon saved on DB ${id}`)
    }
}
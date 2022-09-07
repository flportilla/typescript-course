(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Xmen extends Mutant {

        saveWorld() {
            return 'Saved'
        }

    }
    class Villain extends Mutant {

        conquerWorld() {
            return 'Conquered'
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan')
    const magneto: Villain = new Villain('Magneto', 'Magus')

    // console.log(wolverine.saveWorld())
    // console.log(magneto.conquerWorld())

    const printName = (character: Mutant) => {
        console.log(character.realName)
    }

    printName(wolverine)

})()
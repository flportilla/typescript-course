(() => {

    class Avenger {

        constructor
            (
                public name: string,
                public realName: string,
            ) {
            // console.log('Constructor avenger called')
        }

        //This protected method is accesible for extends
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            // console.log('xmen constructor called')

        }

        get fullName() {

            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string,) {
            if (name.length < 3) throw new Error('too short')
            this.name = name
        }

        getFullNameFromXmen() {
            // console.log(super.getFullName())
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    // console.log(wolverine.fullName)
    // wolverine.fullName = 'Fl'
    // console.log(wolverine.fullName)

    // wolverine.getFullNameFromXmen()

})()
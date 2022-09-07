(() => {

    //Long way
    // class Avenger {

    //     //Only available inside this calss
    //     private name: string;

    //     //Available outside of the class
    //     public team: string;

    //     //if nothing is written, is taken as public
    //     realName?: string;

    //     //To acess this, use the class not an instance
    //     static avgAge: number = 35

    //     constructor(name: string, team: string, realName?: string) {
    //         this.name = name;
    //         this.realName = realName;
    //         this.team = team
    //     }

    // }


    //short way

    class Avenger {

        static avgAge: number = 35
        static getAvgAge() {
            return this.name
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
            avgAge: number = 55,

        ) { }

        //is public by default
        public bio() {
            return `${this.name} (${this.team})`
        }

    }

    const antman = new Avenger('Antman', 'Captain', 'Scott Lang')
    // console.log(antman)

    // console.log(antman.bio())
    // console.log(Avenger.getAvgAge())

    //static
    // console.log(Avenger.avgAge)

})()
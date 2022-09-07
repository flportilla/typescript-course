(() => {

    class Avenger {

        //Only available inside this calss
        private name: string;

        //Available outside of the class
        public team: string;

        //if nothing is written, is taken as public
        realName?: string;

        //To acess this, use the class not an instance
        static avgAge: number = 35

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.realName = realName;
            this.team = team
        }

    }

    const antman = new Avenger('Antman', 'Captain')
    console.log(antman)

    //static
    // console.log(Avenger.avgAge)

})()
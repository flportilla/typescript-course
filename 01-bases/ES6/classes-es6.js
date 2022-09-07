(() => {

    class Avenger {
        constructor(name = 'no name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger('hulk', 9001)

    class FlyingAvenger extends Avenger {

        constructor(name, power) {
            super(name, power)
            this.flying = true;
        }
    }

    const falcon = new FlyingAvenger('falcon', 50)

    console.log(hulk);
    console.log(falcon);

})()
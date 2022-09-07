(() => {

    interface Customer {
        name: string,
        age?: number,
        address: Adress,
        getFullAdress(id: string): void
    }

    interface Adress {

        id: number,
        zipcode: string,
        city?: string
    }

    const customer: Customer = {
        name: 'flportilla',
        age: 29,
        address: {
            id: 123,
            zipcode: '680081',
            city: 'anyName'
        },
        getFullAdress(id: string) {
            return this.address.city
        },
    };

    const constumer2: Customer = {

        name: 'sheflportilla',
        age: 30,
        address: {
            id: 222,
            zipcode: 'asd 123',
            city: 'tokio'
        },
        getFullAdress(id: string) {
            return this.address.city
        },

    }



})()
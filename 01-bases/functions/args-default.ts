(() => {

    //optional args are always the last or add a default value
    const fullName = (firstName: string, lastName?: string, upper: boolean = false,): string => {

        if (upper) {
            return `${firstName}${lastName || '---'}`.toUpperCase()
        }

        return `${firstName}${lastName || '---'}`
    };

    const name = fullName('tony', 'stark', true);
    console.log({ name });
})()
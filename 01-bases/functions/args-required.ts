(() => {

    const fullName = (firstName: string, lastName: string): string => {

        if (!firstName) {
            throw new Error('Name required')
        }

        return `${firstName}${lastName}`
    };



    const name = fullName('tony', 'stark');
    console.log({ name });
})()
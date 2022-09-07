(() => {

    //never means that after the execution of this function
    //the code ends, it finish the execution
    const error = (message: string): never => {
        throw new Error(message)
    }

    error('Help')

    const example = (message: string): (never | number) => {
        if (false) {
            throw new Error(message)
        }

        return 1
    }

    example('Help')

})()
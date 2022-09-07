"use strict";
(() => {
    //never means that after the execution of this function
    //the code ends, it finish the execution
    const error = (message) => {
        throw new Error(message);
    };
    error('Help');
    const example = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    example('Help');
})();

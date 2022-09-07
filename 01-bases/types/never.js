"use strict";
(() => {
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
//# sourceMappingURL=never.js.map
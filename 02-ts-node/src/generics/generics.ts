export const printObject = (arg: any) => {
    console.log(arg)
};

export function genericFunction<T>(params: T) {
    return params
};

export const genericArrowFunction = <T>(args: T) => args
const stringfy = ( value: any ) => Object.prototype.toString.call( value );

export const isObject = ( value: any ): boolean => {
    return stringfy( value ) === '[object Object]';
}

export const isArray = ( value: any ): boolean => {
    return stringfy( value ) === '[object Array]';
}
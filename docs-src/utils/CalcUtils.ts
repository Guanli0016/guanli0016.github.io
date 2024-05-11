// 10进制数字或字符串 转 16进制字符串
export const dec2hex = ( n: number | string, upper: boolean = true ): string => {
    if ( typeof n === 'string') {
        n = parseInt( n ) || 0;
    }
    const hex: string = n.toString(16).padStart(2, '0');
    return upper ? hex.toLocaleUpperCase() : hex;
}
// 16进制字符串 转 10进制字符串
export const hex2dec = ( n: number | string ): string => {
    if ( typeof n === 'string' ) {
        n = parseInt( '0x' + n ) || 0;
    }
    const dec: string = n.toString(10);
    return dec;
}
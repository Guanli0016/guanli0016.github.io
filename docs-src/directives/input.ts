import type { Directive } from "vue";

const validates: any = {
    number: ( el: HTMLInputElement ): void => {
        el.value = el.value.replace( /\D/g, '' );
    },
    color: ( el: HTMLInputElement ): void => {
        el.value = el.value.replace( /[^0-9a-f]/gi, '' ).toLocaleUpperCase();
        if ( !el.value.startsWith("#") ) {
            el.value = "#" + el.value;
        }
        el.value = el.value.slice( 0, 7 );
    },
}

export const vValid: Directive = ( el: HTMLInputElement, binding: any ) => {
    el.addEventListener('input', () => {
        for ( let key in binding.modifiers ) {
            if ( binding.modifiers[ key ] ) {
                validates[ key ]( el );
            }
        }
    });
}

export const vMax: Directive = ( el: HTMLInputElement, binding: any ) => {
    el.addEventListener('input', () => {
        if ( parseInt( el.value ) > binding.value ) {
            el.value = el.value.slice( 0, -1 );
        }
    });
}
import type { Directive } from "vue";

export const vWheel: Directive = ( el: HTMLElement, binding: any ) => {
    let prevent: boolean = false;
    el.addEventListener( 'wheel', ( evt: WheelEvent ) => {
        if ( prevent ) return;
        prevent = true;
        setTimeout(() => {
            binding.value.call( null, evt.deltaY > 0 ? 1 : -1 );
            prevent = false;
        }, 200 );
    })
}

export const vTouch: Directive = ( el: HTMLElement, binding: any ) => {

    let start: number;

    el.addEventListener( 'touchstart', ( evt: TouchEvent ) => {
        start = binding.modifiers.x
            ? evt.touches[0].clientX
            : evt.touches[0].clientY;
        document.addEventListener( 'touchmove', onTouchMove, { passive: false } );
        document.addEventListener( 'touchend', onTouchEnd );
    })

    const onTouchMove = ( evt: TouchEvent ) => {
        evt.preventDefault();
        let move: number = binding.modifiers.x
            ? evt.touches[0].clientX
            : evt.touches[0].clientY;
        if ( Math.abs( move - start ) >= 100 ) {
            onTouchEnd( evt );
        }
    }

    const onTouchEnd = ( evt: TouchEvent ) => {
        let end: number = binding.modifiers.x
            ? evt.changedTouches[0].clientX
            : evt.changedTouches[0].clientY;
        binding.value.call( null, end - start < 0 ? 1 : -1 );
        document.removeEventListener( 'touchmove', onTouchMove );
        document.removeEventListener( 'touchend', onTouchEnd );
    }
}
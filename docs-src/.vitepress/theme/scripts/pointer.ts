document.addEventListener('click', ( evt: MouseEvent ): void => {
    const pointer: HTMLDivElement = document.createElement('div');
    pointer.classList.add('desktop-pointer');
    pointer.style.left = `${ evt.clientX }px`;
    pointer.style.top = `${ evt.clientY }px`;
    document.body.appendChild(pointer);
    pointer.addEventListener('animationend', (): void => {
        pointer.remove();
    })
})
import {createElement, setPosition} from './lib01';

class circle {
    constructor(x, y, size) {
        this.elem = createElement();
        setPosition(this.elem, x, y);
        
        this.elem.style.width = size;
        this.elem.style.height = size;
        this.elem.style.borderRadius = '100%';

    }


}


export {circle};
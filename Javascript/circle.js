import {createElement, setPosition} from './lib01.js';

class circle {
    constructor(x, y, size) {
        this.elem = createElement();
        setPosition(this.elem, x, y);
        size = "0px";
        this.elem.style.width = size;
        this.elem.style.height = size;
        this.elem.style.borderRadius = '100%';
        this.elem.style.backgroundColor = 'red';

    }


}


export {circle};
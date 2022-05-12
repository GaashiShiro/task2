import {createElement, setPosition} from './lib01.js';

class Circle {
    constructor(x, y, size) {
        this.elem = createElement();
        setPosition(this.elem, x, y);
        
        this.elem.style.width           = size + 'px';
        this.elem.style.height          = size + 'px';
        this.elem.style.borderRadius    = size + 'px';
        this.elem.style.backgroundColor = 'red';
        

    }


}


export {Circle};
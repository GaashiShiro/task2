import {createElement, setPosition} from './lib01.js';

class Rct {
    constructor(x, y, width, height, color) {
        this.elem = createElement();
        setPosition(this.elem, x, y);
        
        this.elem.style.width = width + 'px';
        this.elem.style.height = height + 'px';

        if (width == height) {
            console.log('This is a rectangle not a square');
        };
    
        this.elem.style.backgroundColor = color;
    
    }


}


export {Rct};
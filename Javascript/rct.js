import {createElement} from './lib01.js';

class rct {
    constructor(width, height, color) {
        this.elem = createElement();
        
        this.elem.style.width = width;
        this.elem.style.height = height;

        if (width == height) {
            console.log('This is a rectangle not a square');
        };
    
        this.elem.style.color = color;
    
    }


}


export {rct};
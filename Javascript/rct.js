import {createElement} from './lib01.js';

class Rct {
    constructor(width, height, color) {
        this.elem = createElement();
        
        this.elem.style.width = width + 'px';
        this.elem.style.height = height + 'px';

        if (width == height) {
            console.log('This is a rectangle not a square');
        };
    
        this.elem.style.color = color;
    
    }


}


export {Rct};
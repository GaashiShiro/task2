import {createElement} from './lib01';

class circle {
    constructor(size) {
        this.elem = createElement();
        
        
        this.elem.style.width = size;
        this.elem.style.height = size;
        this.elem.style.borderRadius = '100%';

    }


}


export {circle};
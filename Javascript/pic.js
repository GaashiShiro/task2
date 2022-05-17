import {createImg, setPosition} from './lib01.js';

class Pic {
    constructor(x, y, width, height) {
        this.elem = createImg();
        setPosition(this.elem, x, y)

        this.elem.style.width           = width + 'px';
        this.elem.style.height          = height + 'px';

    }


}


export {Pic};

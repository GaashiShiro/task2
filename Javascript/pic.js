import {createElement, setPosition} from './lib01.js';

class pic {
    constructor(x, y) {
        this.elem = createElement();
        setPosition(this.elem, x, y)

    }


}


export {pic};

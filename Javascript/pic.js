import {createElement, setPosition} from './lib01';

class pic {
    constructor(x, y) {
        this.elem = createElement();
        setPosition(this.elem, x, y)

    }


}


export {pic};
import {createElement, setPosition} from './lib01.js';

class Circle {
    constructor(x, y) {
        this.elem = createElement();
        setPosition(this.elem, x, y);
        //size = "0px";
        this.elem.style.width = 100;
        this.elem.style.height = 100;
        this.elem.style.borderRadius = '100%';
        this.elem.style.backgroundColor = 'red';

    }


}


export {Circle};
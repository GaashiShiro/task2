const createElement = () => {
    let element = document.createElement('div');
    document.body.appendChild(element);
    return element;
}

const setPosition = (elem, x, y) => {
    elem.style.position = 'absolute'
    elem.style.left     = x + 'px';
    elem.style.top      = y + 'px';
}
/* Slider
const moveX = //if X is positive return X, if negative "stops?"

const moveY = //if Y is positive return Y, if negative "stops?"


console.log = (n) => {document.body.style.background = n;}
console.log('red');*/

export {createElement, setPosition};
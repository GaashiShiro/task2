const createElement = () => {
    let element = document.createElement('div');
    document.body.div.appendChild(element);
    return element;
}

const setPosition = (elem, x, y) => {
    elem.style.position = 'absolute'
    elem.style.left     = x + 'px';
    elem.style.top      = y + 'px';
}


export {createElement, setPosition};
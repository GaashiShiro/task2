import {createElement, setPosition} from "./lib01.js";
import {rct} from "./rct.js";
import {Circle} from "./circle.js";
import {pic} from "./pic.js";

const main = () => {
    const drawingDiv = document.createElement('div') //creates drawing area element
    drawingDiv.id = 'drawing-area';                                  //assigns the id of the drawing area
    drawingDiv.style.cssText = 'position:fixed;top:0;width:100%;height:80%;margin:0;background:rgb(240, 240, 241)'
    document.body.appendChild(drawingDiv);

    const uiDiv = document.createElement('div') //creates ui element
    uiDiv.id = 'ui';                                            //assigns the id of the UI
    uiDiv.style.cssText = 'position:fixed;top:80%;width:100%;height:20%;margin:0;background:rgb(0, 0, 255)';
    document.body.appendChild(uiDiv);

        //I wanna add a min height to the page

    const insertBt = document.createElement('button');
    insertBt.innerHTML = 'Insert'
    insertBt.style.cssText = 'position: fixed; top: 88%; height: 25px; width:70px; right:1%'
    uiDiv.appendChild (insertBt); //appends insert button

    const shapeSelect = document.createElement('select')
    shapeSelect.id = 'dropdown';
    shapeSelect.style.cssText = 'position: fixed; top: 88%; height: 25px; width:90px; left:45px';
    uiDiv.appendChild (shapeSelect);

    const empty = document.createElement ('option')
    empty.id = '';
    empty.innerHTML = 'Select One';
    shapeSelect.appendChild(empty);

    const rect = document.createElement ('option')
    rect.id = 'rect';
    rect.innerHTML = 'Rectangle';
    shapeSelect.appendChild(rect);

    const crcl = document.createElement ('option')
    crcl.id = 'circle';
    crcl.innerHTML = 'Circle';
    shapeSelect.appendChild(crcl);

    const pic = document.createElement ('option')
    pic.id = 'pic';
    pic.innerHTML = 'Picture';
    shapeSelect.appendChild(pic);

    const picker = document.createElement ('input')
    picker.type = 'color';
    picker.id   = 'color-picker';
    picker.value= '#ff0000' //Default color
    picker.style.cssText = 'position: fixed; top: 88.25%; height: 25px; width:25px;left:70%; border:0px;border-radius: 15px; padding:0; overflow:hidden'
    uiDiv.appendChild(picker);

    const coordX = document.createElement ('input')
    coordX.style.cssText = 'position: fixed; top: 88%; height: 25px; width:90px; left:30%'
    uiDiv.appendChild(coordX);

    const coordY = document.createElement ('input')
    coordY.style.cssText = 'position: fixed; top: 88%; height: 25px; width:90px; left:50%'
    uiDiv.appendChild(coordY);

    const shape = shapeSelect.addEventListener ('change', (e) => {
        const shapeSelected = e.target.value
        console.log(shapeSelected)
    })
    
    
    const c1 = new Circle(50,50);
    drawingDiv.appendChild(c1);

    /*insertBt.addEventListener ('click', (e) => {
        console.log('clicked')
        if (shape.value == 'Rectangle') {
            drawingDiv.appendChild(document.createElement(rct));
        }
        else if (shape.value == 'Circle') {
            
        }
    }) */
        
}

main ();
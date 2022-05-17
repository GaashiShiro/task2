import {createElement, setPosition} from "./lib01.js";
import {Rct} from "./rct.js";
import {Circle} from "./circle.js";
import {Pic} from "./pic.js";

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
    coordX.style.cssText = 'position: fixed; top: 85%; height: 15px; width:90px; left:30%'
    coordX.placeholder = 'Position X';
    uiDiv.appendChild(coordX);
     

    const coordY = document.createElement ('input')
    coordY.style.cssText = 'position: fixed; top: 85%; height: 15px; width:90px; left:50%'
    coordY.placeholder = 'Position Y';
    uiDiv.appendChild(coordY);

    const size1 = document.createElement ('input')
    size1.style.cssText = 'position: fixed; top: 90%; height: 15px; width:90px; left:30%'
    size1.placeholder = 'Width';
    uiDiv.appendChild(size1);
    size1.disabled = true;

    const size2 = document.createElement ('input')
    size2.style.cssText = 'position: fixed; top: 90%; height: 15px; width:90px; left:50%'
    size2.placeholder = 'High';
    uiDiv.appendChild(size2);
    size2.disabled = true;

    const picture = document.createElement ('input')
    picture.type = 'file';
    picture.style.cssText = 'position: fixed; top: 88%; height: 25px; width:90px; left:75%'
    uiDiv.appendChild(picture);
    picture.hidden = true;
    console.log(picture)
    

    var shape = shapeSelect.addEventListener ('change', (e) => { //selects shapes, enables/disable inputs
        shape = e.target.value
        //console.warn(shape)
        if (shape == 'Circle' ) {
            picture.hidden = true;
            size1.disabled = false;
            size2.disabled = true;
        } else if (shape == 'Rectangle'){
            picture.hidden = true;
            size1.disabled = false;
            size2.disabled = false;
        } else if (shape == 'Picture') {
            picture.hidden = false;
            size1.disabled = false;
            size2.disabled = false;
        } else {
            picture.hidden = true;
            size1.disabled = true;
            size2.disabled = true;
        }
    })

        
    insertBt.addEventListener ('click', (e) => {
        console.log('clicked')
        //console.log(shape)
       if (shape == 'Rectangle') {
            const r1 = new Rct (coordX.value, coordY.value, size1.value, size2.value, picker.value)
            drawingDiv.appendChild(r1.elem);
        } else if (shape == 'Circle') { 
            const c1 = new Circle(coordX.value,coordY.value, size1.value, picker.value);
            drawingDiv.appendChild(c1.elem);
        } else if (shape == 'Picture') {
            const img = new Image (coordX.value, coordY.value);
            img.src = picture.value;
            drawingDiv.appendChild(img);
        }
    })






    /*const c1 = new Circle(50,50, 100);
    console.log(c1.elem);
    drawingDiv.appendChild(c1.elem);

    document.addEventListener('click', function(e){
        e = e || window.event;
        var target= e.target || e.srcElement,
        text = target.textContent || target.innerText;
    },false); */


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
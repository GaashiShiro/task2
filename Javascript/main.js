import {createElement, setPosition} from "./lib01.js";
import {rct} from "./rct.js";
import {circle} from "./circle.js";
import {pic} from "./pic.js";

const main = () => {

    document.body.onload = addElements;

    function addElements () {
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


       /* const rctBt = document.createElement('button');
        rctBt.innerHTML = 'Rectangle'
        rctBt.style.cssText = 'position: fixed; top: 88%; height: 25px; width:75px; left:45px'
        uiDiv.appendChild (rctBt); //appends rectangle button */

        const shapeSelect = document.createElement('select')
        shapeSelect.id = 'dropdown';
        shapeSelect.style.cssText = 'position: fixed; top: 88%; height: 25px; width:90px; left:45px';
        uiDiv.appendChild (shapeSelect);

        const rect = document.createElement ('option')
        rect.id = 'rect';
        rect.innerHTML = 'Rectangle';
        shapeSelect.appendChild(rect);

        const circle = document.createElement ('option')
        circle.id = 'circle';
        circle.innerHTML = 'Circle';
        shapeSelect.appendChild(circle);

        const pic = document.createElement ('option')
        pic.id = 'pic';
        pic.innerHTML = 'Picture';
        shapeSelect.appendChild(pic);

        const picker = document.createElement ('input')
        picker.type = 'color';
        picker.id   = 'color-picker';
        picker.value= '#ff0000' //Default color
        picker.style.cssText = 'position: fixed; top: 88%; height: 25px; width:25px; right:155px; border:none; padding:0'
        uiDiv.appendChild(picker);


        
    }
    const r = document.querySelector(".dropdown");
    const c = document.querySelector(".circle");
    const insert = document.querySelector(".insertBt");

    
    
    
    //r.addEventListener ('change', (e) => {}) 
    //insert.addEventListener ("click", (e) => {})

    
    
}

main ();
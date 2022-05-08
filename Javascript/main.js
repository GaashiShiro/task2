import {createElement, setPosition} from "./lib01.js";
import {rct} from "./rct.js";
import {circle} from "./circle.js";
import {pic} from "./pic.js";

const main = () => {

    document.body.onload = addElements;

    function addElements () {
        const drawingDiv = document.createElement('div') //creates drawing area element
        drawingDiv.style.cssText = 'position:fixed;top:0;width:100%;height:80%;margin:0;background:rgb(240, 240, 241)'

        const uiDiv = document.createElement('div') //creates ui element
        uiDiv.style.cssText = 'position:fixed;top:80%;width:100%;height:20%;margin:0;background:rgb(0, 0, 255)';

        document.body.append(drawingDiv);
        document.body.append(uiDiv);

        //I wanna add a min height to the page

        const insertBt = document.createElement('button');
        insertBt.innerHTML = 'Insert'
        insertBt.style.cssText = 'position: fixed; top: 88%; height: 25px; width:70px; right:1%'
        document.body.appendChild (insertBt); //appends insert button


        const rctBt = document.createElement('button');
        rctBt.innerHTML = 'Rectangle'
        rctBt.style.cssText = 'position: fixed; top: 88%; height: 25px; width:75px; left:45px'
        document.body.appendChild (rctBt); //appends insert button
 
    }

    const circleTest = new circle ('50px');
    

    



















}

main ();
/*import {createElement, setPosition} from "./lib01";
import {} from "./rct";
import {} from "./circle";
import {} from "./pic"; */

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
        insertBt.style.cssText = 'position: fixed; top: 87%; height: 5%;width:8%; right:1%'

        document.body.appendChild (insertBt, uiDiv);
        
    }



    



















}

main ();
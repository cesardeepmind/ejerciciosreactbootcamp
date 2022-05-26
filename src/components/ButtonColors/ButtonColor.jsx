import React from 'react'

import './buttoncolor.css';

function colorRGB(){
    var makingColorCode = '0123456789ABCDEF';
    var finalCode = '#';
    for (var counter = 0; counter < 6; counter++) {
        finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
}
function setColor() {
    document.getElementById('container').style.backgroundColor = colorRGB();
};

let myInterval;
function colors(e){
    console.log(e.type);
    
    if (e.type === 'mouseenter') {
        myInterval = setInterval(() =>{
            setColor()
        }, 800);
    }else{
        clearInterval(myInterval)
        myInterval = null;
    }


}

   

function changeBackgroundOver(e) {
    colors(e)   
}

function changeBackground(e){
    e.target.style.background = 'black'
}

function stopColors(e) {
    colors(e)
}

export function ButtonColor() {


  return (
    <div
        onMouseOut={changeBackground}
        onMouseEnter={changeBackgroundOver}
        onDoubleClick={stopColors}
        id='container'
      >
        
      </div>
  )
}


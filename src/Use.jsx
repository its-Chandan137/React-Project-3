import React, { useState } from 'react'
let body = document.querySelector('body')
let cl = document.querySelector('.cl')
let btn1 = document.querySelector('#btn1')

function Use() {

    var [a, b] = useState(true);

    // function check(){
    //     if(btn1.innerHTML == "red")
    //     {
    //         btn1.addEventListener('click', () => {
    //             btn1.style.backgroundColor = "white";
    //     }
    //     else
    //     {
    //         btn1.addEventListener('click', () => {
    //             btn1.style.backgroundColor = "red";
    //         })
    //     }
    // }
    // function xy(){
    //     if(3==3)
    //         console.log("3");
    //     else
    //         console.log("1");
    // }
    // xy();

    function a1(){
        body.style.backgroundColor = "red";
        // btn1.innerText = 'Red';
        body.style.color = "white";
        return "Red";
    }
    function a2(){
        body.style.backgroundColor = "white";
        // btn1.innerHTML = 'White';
        body.style.color = "red";
        return "Not Red";
    }
  return (
    <div>
        <h1>{a == true ? a1() : a2()}</h1>
        <button id="btn1" onClick={() => b(!a)}>Click</button>
    </div>
  )
}

export default Use;
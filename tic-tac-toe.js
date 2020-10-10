"use strict";

//let squares = document.querySelectorAll('.square');
window.onload = function(){
    let divs = document.querySelectorAll('#board > div');
    console.log(divs.length)

    divs.forEach(function(element, index, list) {
        element.classList.add("square");
        console.log('added square!');
    })
}

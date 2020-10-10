"use strict";

var squares = [];
var gameTracker = new Array(9);

window.onload = function(){

    this.squares = document.querySelectorAll('#board > div');
    console.log(squares.length)

    squares.forEach(function(element, index, list) {
        element.classList.add("square");
        console.log('added square!');
    })

    this.selector()

}

function selector() {

    squares.forEach(function(element, index, list) {

        element.addEventListener('click', function(e) {

            if (e.target.innerHTML == 'O') {
                e.target.classList.remove('O');
                e.target.classList.add('X');
                e.target.innerHTML = 'X';
                gameTracker[index] = 'X'
                console.log('click x')

            } else if (e.target.innerHTML == 'X') {
                e.target.classList.remove('X');
                e.target.classList.add('O');
                e.target.innerHTML = 'O';
                gameTracker[index] = 'O'
                console.log('click o')

            } else {
                e.target.classList.add('X');
                e.target.innerHTML = 'X';
                gameTracker[index] = 'X'
                console.log('click x')
            }
        })

    }

    )
}

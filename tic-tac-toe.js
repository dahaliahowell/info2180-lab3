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

    console.log(gameTracker)

}

function selector() {

    squares.forEach(function(element, index, list) {

        element.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover')
        })

        element.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover')
        })

        element.addEventListener('click', function(e) {

            if (e.target.innerHTML == 'O') {
                e.target.classList.remove('O');
                e.target.classList.add('X');
                e.target.innerHTML = 'X';
                gameTracker[index] = 'X'
                console.log('click x')
                console.log(gameTracker)
                checkForWinner()

            } else if (e.target.innerHTML == 'X') {
                e.target.classList.remove('X');
                e.target.classList.add('O');
                e.target.innerHTML = 'O';
                gameTracker[index] = 'O'
                console.log('click o')
                console.log(gameTracker)
                checkForWinner()

            } else {
                e.target.classList.add('X');
                e.target.innerHTML = 'X';
                gameTracker[index] = 'X'
                console.log('click x')
                console.log(gameTracker)
                checkForWinner()
            }
        })

    }

    )
}

function checkForWinner() {

    var arr = ['X', 'O'];

    arr.forEach(function(element, index, list){

        if (element == gameTracker[0] && element == gameTracker[1] && element == gameTracker[2]) {

            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[3] && element == gameTracker[4] && element == gameTracker[5]) {

            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[6] && element == gameTracker[7]  && element == gameTracker[8]) {
            
            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[0] && element == gameTracker[3] && element == gameTracker[6]) {
            
            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[1] && element == gameTracker[4] && element == gameTracker[7]) {
            
            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[2] && element == gameTracker[5] && element == gameTracker[8]) {
            
            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[0] && element == gameTracker[4] && element == gameTracker[8]) {
            
            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        } else if (element == gameTracker[2] && element == gameTracker[4] && element == gameTracker[6]) {
            
            document.getElementById('status').className = 'you-won'
            document.getElementById('status').innerHTML = `Congratulations! ${element} is the Winner!`
        
        }
    })
}

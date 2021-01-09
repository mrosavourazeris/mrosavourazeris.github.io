let spotOne = document.getElementById('spotOne')
let spotTwo = document.getElementById('spotTwo')
let spotThree = document.getElementById('spotThree')
let spotFour = document.getElementById('spotFour')
let spotFive = document.getElementById('spotFive')
let spotSix = document.getElementById('spotSix')
let myRow = document.getElementById('myRow')

// console.log(window.innerWidth)

function portfolioCols (){
    if (window.innerWidth > 1107){
        spotOne.setAttribute('class', 'col-sm-4')
        spotTwo.setAttribute('class', 'col-sm-4')
        spotThree.setAttribute('class', 'col-sm-4')
        spotFour.setAttribute('class', 'col-sm-4')
        spotFive.setAttribute('class', 'col-sm-4')
        spotSix.setAttribute('class', 'col-sm-4')
    }
    
    else if (window.innerWidth < 1107 && window.innerWidth > 695){
        spotOne.setAttribute('class', 'col-sm-6')
        spotTwo.setAttribute('class', 'col-sm-6')
        spotThree.setAttribute('class', 'col-sm-6')
        spotFour.setAttribute('class', 'col-sm-6')
        spotFive.setAttribute('class', 'col-sm-6')
        spotSix.setAttribute('class', 'col-sm-6')
    }

    else if (window.innerWidth < 695){
        spotOne.setAttribute('class', 'col-sm-12')
        spotTwo.setAttribute('class', 'col-sm-12')
        spotThree.setAttribute('class', 'col-sm-12')
        spotFour.setAttribute('class', 'col-sm-12')
        spotFive.setAttribute('class', 'col-sm-12')
        spotSix.setAttribute('class', 'col-sm-12')
    }

}

portfolioCols()

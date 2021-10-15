let numberOfCats = 5;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');
const lefty = document.querySelector('#lefty');

function generateCats() {

    for (let i=0; i < numberOfCats; i++) {
        cat = document.createElement('img');
        cat.src = './pusheen-cat-icegif.gif';

        let randomTop = Math.floor(Math.random()*400) + 1;
        let randomLeft = Math.floor(Math.random()*400) + 1;
        let numRounds = 0;

        cat.style.top = randomTop + 'px';
        cat.style.left = randomLeft + 'px';

        theLeftSide.appendChild(cat);

        const leftSideImages = theLeftSide.cloneNode(true);

        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
        numRounds += 1;

    }

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    theLeftSide.lastChild.addEventListener('click', playMeow);

    theLeftSide.addEventListener('click', gameOver);
    theLeftSide.addEventListener('click', playAngryMeow);
    
}

function nextLevel() {
    event.stopPropagation();

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }

    numberOfCats += 5;
    generateCats();
}

function gameOver() {
    document.getElementById('gameOver1').style.display = "block";
    document.getElementById('gameOver2').style.display = "block";
    document.getElementById('restart').style.display = "block";

    theLeftSide.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
}

function off() {
    document.getElementById('gameOver1').style.display = "none";
    document.getElementById('gameOver2').style.display = "none";
    document.getElementById('restart').style.display = "none";
}

function restartGame() {
    document.getElementById('gameOver1').style.display = "none";
    document.getElementById('gameOver2').style.display = "none";
    document.getElementById('restart').style.display = "none";
    event.stopPropagation();

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }

    numberOfCats = 5;
    generateCats();
}

function playMeow() {
    var meow = document.getElementById("meow");
    meow.play();
}

function playAngryMeow() {
    var angryMeow = document.getElementById("angryMeow");
    angryMeow.play();
}
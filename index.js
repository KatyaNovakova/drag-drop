var colorBoxesYellow = document.querySelector('.color-boxes-yellow');
var colorBoxYellow = document.querySelector('.color-box-yellow');

var colorBoxesRed = document.querySelector('.color-boxes-red');
var colorBoxRed = document.querySelector('.color-box-red');

var colorBoxesBlue = document.querySelector('.color-boxes-blue');
var colorBoxBlue = document.querySelector('.color-box-blue');

var colorBoxesGreen = document.querySelector('.color-boxes-green');
var colorBoxGreen = document.querySelector('.color-box-green');

dragDropFunction(colorBoxesYellow, colorBoxYellow);
dragDropFunction(colorBoxesRed, colorBoxRed);
dragDropFunction(colorBoxesBlue, colorBoxBlue);
dragDropFunction(colorBoxesGreen, colorBoxGreen);

function dragDropFunction(colorShape, colorShapeBox) {
    // colorBoxes Listeners

    colorShape.addEventListener('dragstart', dragStart);
    colorShape.addEventListener('dragend', dragEnd);

    colorShapeBox.addEventListener('dragover', e => e.preventDefault());
    colorShapeBox.addEventListener('dragenter', e => e.preventDefault());
    colorShapeBox.addEventListener('drop', dragDrop);
    

    // Drag function

    function dragStart(e) {
        var element = e.target;
        addClassName(element, 'hold');
        setTimeout( () => addClassName(element, 'hinvisibleold'), 0);
        console.log('dragStart');
    }

    function dragEnd(e) {
        var element = e.target;
        addClassName(element, 'color-boxes');
        console.log('dragEnd');
    }


    function dragDrop(e) {
        var element = e.target;

        element.appendChild(colorShape);
        console.log('dragDrop');
    }
}

const addClassName = (e, className) => {
    if (!e.className.includes(className)) {
        element.classList.add(className);
    }
}

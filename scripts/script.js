const gridContainer = document.querySelector('.grid-container');

function setNumberOfGridElements(numberOfElements){
    for (let i = 0; i < numberOfElements; i++) {
        let element = document.createElement('div');
        element.classList.add('grid-element');
        gridContainer.appendChild(element);        
    }
}

setNumberOfGridElements(256);
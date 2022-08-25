const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.grid-dimensions-slider');
const sliderValueText = document.querySelector('.slider-value');
let gridElements = document.querySelector('.grid-container').children;
const brushColorElement = document.querySelector('.brush-color');

sliderValueText.textContent = `${slider.value*16}X${slider.value*16}`;
setGridDimensions(slider.value*16);
gridContainer.setAttribute('style', ` grid-template-columns: repeat(16, 1fr);`);
addEventListenerToChangeColorWhenHovered(brushColorElement.value);

brushColorElement.addEventListener('change', () => {
    addEventListenerToChangeColorWhenHovered(brushColorElement.value);
});

slider.addEventListener('change', () => {
    setGridDimensions(slider.value*16);
    setGridLayout();    
    gridElements = document.querySelector('.grid-container').children;
});

function setGridLayout() {    
    const dimensions = slider.value*16;
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 1fr);`);
}

slider.oninput = () => {
    sliderValueText.textContent = `${slider.value*16}X${slider.value*16}`;
}

function setGridDimensions(size){    
    removeAllChildNodes(gridContainer);
    for (let i = 0; i < size*size; i++) {
        let element = document.createElement('div');
        gridContainer.appendChild(element);        
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addEventListenerToChangeColorWhenHovered(color){
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener('mouseover', (e) => {
             e.target.style.backgroundColor = `${color}`;
        });    
    }
}
const gridContainerElement = document.querySelector('.grid-container');
const sliderElement = document.querySelector('.grid-dimensions-slider');
const sliderElementDisplayValue = document.querySelector('.slider-current-value');
let gridElements = document.querySelector('.grid-container').children;
const brushColorElement = document.querySelector('.brush-color');
const rainbowModeButton = document.querySelector('.rainbow-mode-button');
const clearButton = document.querySelector('.clear-button');

// Set starting/default options

sliderElementDisplayValue.textContent = `${sliderElement.value*16}X${sliderElement.value*16}`;

fillGridContainer(sliderElement.value*16);

gridContainerElement.setAttribute('style', ` grid-template-columns: repeat(16, 1fr);`);

singleColorMode(brushColorElement.value);

clearButton.addEventListener('click', clearGridColors);


rainbowModeButton.addEventListener('click', rainbowMode);
//------------------------------------

brushColorElement.addEventListener('change', () => {
    singleColorMode(brushColorElement.value);
});

sliderElement.addEventListener('change', () => {
    fillGridContainer(sliderElement.value*16);
    setGridLayout();    
    singleColorMode(brushColorElement.value);
});

function setGridLayout() {    
    const columns = sliderElement.value*16;
    gridContainerElement.setAttribute('style', `grid-template-columns: repeat(${columns}, 1fr);`);
}

sliderElement.oninput = () => {
    sliderElementDisplayValue.textContent = `${sliderElement.value*16}X${sliderElement.value*16}`;
}

function fillGridContainer(size){    
    removeAllChildNodes(gridContainerElement);
    for (let i = 0; i < size*size; i++) {
        let element = document.createElement('div');
        gridContainerElement.appendChild(element);        
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function singleColorMode(color){
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener('mouseover', (e) => {
             e.target.style.backgroundColor = color;
        });    
    }
}

function rainbowMode(){
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener('mouseover', (e) => {
             e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        });    
    }    
}

function clearGridColors(){
    for (let i = 0; i < gridElements.length; i++) {
       gridElements[i].setAttribute('style', 'background-color: white;');
    }
} 
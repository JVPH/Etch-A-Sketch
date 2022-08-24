const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.grid-dimensions-slider');
const sliderValue = document.querySelector('.slider-value');
sliderValue.textContent = slider.value;

slider.oninput = () => {
    sliderValue.textContent = slider.value;
}

function setGridDimensions(size){
    for (let i = 0; i < size*size; i++) {
        let element = document.createElement('div');
        element.classList.add('grid-element');
        element.setAttribute('style', 'border: thin solid #E1E5EA');
        gridContainer.appendChild(element);        
    }
}

setGridDimensions(16);

gridContainer.setAttribute('style', 'grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr);');

const gridElements = document.querySelector('.grid-container').children;

for (let i = 0; i < gridElements.length; i++) {
   gridElements[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
   });    
}
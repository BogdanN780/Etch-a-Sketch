const container = document.querySelector('#container');
const display = document.querySelector('.grids');
const erase = document.querySelector('.erase');
const wipe = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');
const color = document.querySelector('.color');
const input = document.querySelector('#style1');
const span = document.querySelector('.span');
const span2 = document.querySelector('.span2');
const grid = document.querySelector('#grid');
const slider2 = document.querySelector('.slider2');
const slider = document.querySelector('.slider');

const square = "square";
let colorr = "white";
let isMouseDown = false;

grid.addEventListener("input", makeDivs);

function makeDivs() {
    const numDivs = parseInt(grid.value);
    const flexBasisValue = `calc(100% / ${numDivs})`;
    const heightValue = `calc(100% / ${numDivs})`;

    for (let i = 0; i <= 64; i++) {
        if (numDivs == i ) {
            wipe.style.backgroundColor = "#ededed";
            wipe.style.color = "black";
            erase.style.backgroundColor = "#ededed";
            erase.style.color = "black";
            rainbow.style.backgroundColor = "#ededed";
            rainbow.style.color = "black";
            color.style.backgroundColor = "#ededed";
            color.style.color = "black";
            display.style.backgroundColor = "#ededed";
            display.style.color = "black"; 
        }
    }
    
    container.innerHTML = "";

    for (let i = 0; i < numDivs * numDivs; i++) {
        let divs = document.createElement('div');
        divs.classList.add(square);
        divs.style.flexBasis = flexBasisValue;
        divs.style.height = heightValue;
        container.appendChild(divs);
    
        divs.addEventListener('mousedown', function(e) {
            if (e.target.classList.contains(square)) {
              isMouseDown = true;
              e.target.style.backgroundColor = colorr;
            }
          });
      
          divs.addEventListener('mouseover', function(e) {
            if (isMouseDown && e.target.classList.contains(square)) {
              e.target.style.backgroundColor = colorr;
            }
          });

        let isBorderVisible = false;
        display.addEventListener('click', function() {
            if (isBorderVisible) {
                divs.style.border = "none";
                isBorderVisible = false;
                display.style.backgroundColor = "#ededed";
                display.style.color= "black";
            } else {
                divs.style.border = "solid black 1px";
                isBorderVisible = true;
                display.style.backgroundColor = "black";
                display.style.color = "white";
            }
        });
            
    }
  }
  container.addEventListener('mouseup', function() {
    isMouseDown = false;
  });

wipe.addEventListener('click', function() {
    confirmationBox.style.display = 'block';
    colorr = "white";
    wipe.style.backgroundColor = "black";
    wipe.style.color = "white";
    rainbow.style.backgroundColor = "#ededed";
    rainbow.style.color = "black";
    erase.style.backgroundColor = "#ededed";
    erase.style.color = "black";
    color.style.backgroundColor = "#ededed";
    color.style.color = "black";
  });
  
  confirmYes.addEventListener('click', function() {
    wipeOut();
    confirmationBox.style.display = 'none';
  });
  
  confirmNo.addEventListener('click', function() {
    confirmationBox.style.display = 'none';
  });
  
  function wipeOut() {
    Array.from(container.children).forEach((div) => {
      div.style.backgroundColor = "white";
    });
  
  }

     colorr = "white";
    wipe.style.backgroundColor = "black";
    wipe.style.color = "white";
    rainbow.style.backgroundColor = "#ededed";
    rainbow.style.color= "black";
    erase.style.backgroundColor = "#ededed";
    erase.style.color= "black";
    color.style.backgroundColor = "#ededed";
    color.style.color= "black";
    input.value = "#000000";

})

color.addEventListener('click' , function () {
    
    colorr = input.value;
    input.oninput = () => {
        colorr = style1.value;
    }
    input.value = "#000000";
    color.style.backgroundColor = "black";
    color.style.color = "white";
    wipe.style.backgroundColor = "#ededed";
    wipe.style.color= "black";
    rainbow.style.backgroundColor = "#ededed";
    rainbow.style.color= "black";
    erase.style.backgroundColor = "#ededed";
    erase.style.color= "black";
  colorr = "black";
   
})

erase.addEventListener('click' , function(){
    colorr = "white"
    erase.style.backgroundColor = "black";
    erase.style.color = "white";
    wipe.style.backgroundColor = "#ededed";
    wipe.style.color= "black";
    rainbow.style.backgroundColor = "#ededed";
    rainbow.style.color= "black";
    color.style.backgroundColor = "#ededed";
    color.style.color= "black";
    input.value = "#000000";
   
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
let intervalId, intervalId2;

rainbow.addEventListener('click', () => {
    intervalId = setInterval(() => {
       
        colorr = getRandomColor();
    }, 1);

    intervalId2 = setInterval(() => {
        style1.value = getRandomColor();
    }, 300);
});

color.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        style1.value = '#000000';
    }

    if (intervalId2) {
        clearInterval(intervalId2);
        intervalId2 = null;
        style1.value = '#000000';
    }
});

erase.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        style1.value = '#000000';
    }

    if (intervalId2) {
        clearInterval(intervalId2);
        intervalId2 = null;
        style1.value = '#000000';
    }
});

wipe.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        style1.value = '#000000';
    }

    if (intervalId2) {
        clearInterval(intervalId2);
        intervalId2 = null;
        style1.value = '#000000';
        
    }
});

rainbow.addEventListener('click' , function (){
    
    rainbow.style.backgroundColor = 'black';
    rainbow.style.color = "white";
    erase.style.backgroundColor = "#ededed";
    erase.style.color= "black";
    color.style.backgroundColor = "#ededed";
    color.style.color= "black";
    wipe.style.backgroundColor = "#ededed";
    wipe.style.color= "black";
  
})
  
makeDivs();

span.innerHTML = grid.value;
span2.innerHTML = grid.value;

grid.oninput = function() {
  span.innerHTML = this.value;
  span2.innerHTML = this.value;
} 

const print = document.querySelector('.print');
  print.addEventListener('click', printArea);

  function printArea() {
    const container = document.querySelector('#container');
  
    // Calculate the image dimensions based on the container size
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = 1080;
    const imageHeight = 1080;
  
    const offsetX = (imageWidth - containerWidth) / 2;
    const offsetY = (imageHeight - containerHeight) / 2;
  
    container.style.width = `${imageWidth}px`;
    container.style.height = `${imageHeight}px`;
    container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  
    html2canvas(container, { scale: 1.3, width: imageWidth , height: imageHeight  }).then(canvas => {
    
      const image = new Image();
      image.src = canvas.toDataURL();
  
      const link = document.createElement('a');
      link.href = image.src;
      link.download = 'etch-a-sketch.png';
     
      link.click();
  
      container.style.width = '';
      container.style.height = '';
      container.style.transform = '';
    });
  }


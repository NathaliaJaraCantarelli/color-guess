function generateColor() {
    const options = '0123456789ABCDEF';
    let colorDraw = '#';
    
    for (let b = 0; b < 6; b += 1) {
      colorDraw += options[Math.floor(Math.random() * 16)];
    }
    return colorDraw;
  }

  let color1 = document.getElementById('ball-color-1');
  color1.style.backgroundColor = generateColor();
  let color2 = document.getElementById('ball-color-2');
  color2.style.backgroundColor = generateColor();
  let color3 = document.getElementById('ball-color-3');
  color3.style.backgroundColor = generateColor();
  let color4 = document.getElementById('ball-color-4');
  color4.style.backgroundColor = generateColor();
  let color5 = document.getElementById('ball-color-5');
  color5.style.backgroundColor = generateColor();
  let color6 = document.getElementById('ball-color-6');
  color6.style.backgroundColor = generateColor();
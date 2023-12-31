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

  let text = document.getElementById('rgb-color');
  text.innerText = color2.style.backgroundColor;
  let result = document.getElementById('answer');
  
  let circlesDad = document.getElementById('circles').children;
  let scoreTotal = document.getElementById('score');
  let hits = 0;

  for (let index = 0; index < circlesDad.length; index += 1) {
    circlesDad[index].addEventListener('click', function() {
        if (circlesDad[index].id == 'ball-color-2') { 
            result.innerText = "Acertou!";
            hits += 3;
            scoreTotal.innerText = 'Pontuação: ' + hits;
        } else {
            result.innerText = "Errou! Tente novamente!";
        }
    })
  }

  let buttonReset = document.getElementById('reset-game');
  buttonReset.addEventListener('click', function() {
    color1.style.backgroundColor = generateColor();  
    color2.style.backgroundColor = generateColor();
    color3.style.backgroundColor = generateColor();
    color4.style.backgroundColor = generateColor();
    color5.style.backgroundColor = generateColor();
    color6.style.backgroundColor = generateColor();
    text.innerText = color2.style.backgroundColor;
    result.innerText = "Escolha uma cor: ";
  })

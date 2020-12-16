const colorName = document.getElementById('color-name');
const clickMe = document.getElementById('click-me');

function changeColor(e) {
  let color = '#';
  const hex = '0123456789abcdef';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  colorName.textContent = color;
  document.body.style.backgroundColor = color;
}

clickMe.addEventListener('click', changeColor);

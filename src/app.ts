let x = 10;
let färg = randomItem('red', 'green', 'blue', 'yellow', 'purple', 'orange');
update = () => {
  clear();
  drawRectangle(x, 100, 100, 100, färg);
  if (keyboard.space) {
    keyboard.space = false;
    färg = randomItem('red', 'green', 'blue', 'yellow', 'purple', 'orange');
  }
};

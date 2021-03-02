
import p5 from 'p5';

const sketch = (p) => {

  let img;
  let a = [40,40,50,55,75,35,60,55,60,50,40,60,45,58];
  let start = [0, 40, 80, 130, 185, 260,295,355,410,470,520,560,620,665,723];

  p.preload = function() {
    img = p.loadImage("btvo1.png");
  }

  p.setup  = function() {
    p.createCanvas(img.width*3, img.height);
    p.image(img, 0, 0);
  };

  p.draw = function() {
    p.noStroke();
    let sel = Math.round(Math.random() * 14);
    const sy = start[sel];
    const sx = 0;
    const sw = img.width;
    const sh = a[sel];
    const dy = sy;
    const dx = Math.round(Math.random()*12-6);
    const dw = img.width;
    const dh = sh;

    p.copy(sx, sy, sw, sh, dx, dy, dw, dh);
  };
};

export default sketch;

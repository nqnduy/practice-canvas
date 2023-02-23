const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
	dimensions: [1080, 1080],
};

// const randomRange = (min, max) => Math.random() * (max - min) + min;
// const degToRad = (degrees) => degrees / 180 * Math.PI;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    let x,y;
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
1
    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i <= num; i++) {
      const slide = math.degToRad(360 / num);
      const angle = slide * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slide * random.range(1, -5), slide * random.range(1, 5));
      context.stroke();
      context.restore();

    }


    // context.fillStyle = "red";

    // context.translate(0, 0);
    // // context.rotate(0.75);


    context.beginPath();
    // context.arc(100, 300, 100, Math.PI, Math.PI * 1.5);
    // context.fill();

    // context.fillStyle = "blue";
    // context.beginPath();

    // context.rect(-30, 0, 30, 30);

    // // context.rect(-w * 0.3 * 0.5, - h * 0.3 * 0.5, w * 0.3, h * 0.3);
    // context.fill();
  };
};

canvasSketch(sketch, settings);

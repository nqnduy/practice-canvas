const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [1080, 1080],
};
const degToRad = (degrees) => degrees / 180 * Math.PI;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.translate(x, y);
    context.rotate(degToRad(45));

    context.beginPath();
    context.rect(-w * 0.5 , -h * 0.5, w, h);
    // context.rect(0, 0, w, h);
    context.fill();

    context.fillStyle = "red";

    context.translate(0, 300);
    // context.rotate(0.75);


    context.beginPath();
    context.arc(0, 0, 30, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = "blue";
    context.beginPath();

    context.rect(-30, 0, 30, 30);

    // context.rect(-w * 0.3 * 0.5, - h * 0.3 * 0.5, w * 0.3, h * 0.3);
    context.fill();
  };
};

canvasSketch(sketch, settings);

const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const yx = height * 0.17;

    const off = width * 0.02;

    let x, y;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = yx + (h + gap) * j;

        if (Math.random() > 0.5) {
          context.beginPath();
          // context.rect(x + off / 2, y + off / 2, w - off, h - off);
			    context.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
          context.stroke();
        }
        else {
          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);

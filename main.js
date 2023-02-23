let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

const width = 200;
const height = 200;
const x = 100;
const y = 100;

context.lineWidth = 4;
context.beginPath();
context.rect(x, y, width, height);
context.stroke();

context.beginPath();
context.arc(x + width / 2, y + height / 2, width / 2, 0, Math.PI * 2);
context.stroke();

// const width = 60;
// const height = 60;
// const gap = 20;
// let x, y;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         x = 100 + (width + gap) * i;
//         y = 100 + (height + gap) * j;

//         context.beginPath();
//         context.rect(x, y, width, height);
//         context.stroke();
//         let random = Math.random();
//         console.log("random 👉️", random)
//         if (random > 0.5) {
// 			context.beginPath();
// 			context.rect(x + 8, y + 8, width - 16, height - 16);
// 			context.stroke();
// 		}
    // }
// }

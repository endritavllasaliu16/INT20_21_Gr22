let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Create gradient
let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "gray");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 180, 80);

// Text canvas
let canvas = document.getElementById("textCanvas");
let ctx_text = canvas.getContext("2d");
ctx_text.font = "30px Arial";
ctx_text.strokeText("We started simple!", 10, 50);

//Triangle canvas

let triangle_canvas = document.getElementById("triangleCanvas");
const triangle_context = triangle_canvas.getContext("2d");
triangle_context.beginPath();
triangle_context.moveTo(25, 100);
triangle_context.lineTo(100, 25);
triangle_context.lineTo(175, 100);
triangle_context.lineTo(25, 100);
triangle_context.stroke();
triangle_context.closePath();

// Square from two triangles
let square_canvas = document.getElementById("squareCanvas");
let square_context = square_canvas.getContext("2d");

// Filled triangle
square_context.beginPath();
square_context.moveTo(25, 25);
square_context.lineTo(105, 25);
square_context.lineTo(25, 105);
square_context.fill();

// Stroked triangle
square_context.beginPath();
square_context.moveTo(125, 125);
square_context.lineTo(125, 45);
square_context.lineTo(45, 125);
square_context.closePath();
square_context.stroke();

//Circle canvas
let circle_canvas = document.getElementById("circleCanvas");
let circle_context = circle_canvas.getContext("2d");

var rectangle = new Path2D();
rectangle.rect(30, 30, 80, 80);

var circle = new Path2D();
circle.arc(180, 70, 45, 0, 2 * Math.PI);

circle_context.stroke(rectangle);
circle_context.fill(circle);

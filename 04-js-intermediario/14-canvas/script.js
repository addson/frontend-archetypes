

let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

//linha
ctx.moveTo(0,0);
ctx.lineTo(100, 100);
ctx.lineTo(200, 0);
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.stroke();

//retangulo preenchido
ctx.fillStyle = "red";
ctx.fillRect(10, 110, 80, 80); //x, y, w, h

//retangulo so com a borda
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.strokeRect(10, 110, 80, 80); //x, y, w, h

//retangulo limpando tudo e usando a cor do canvas
ctx.clearRect(25, 125, 50, 50); //x, y, w, h

// iniciando uma nova linha
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.moveTo(110, 190);
ctx.lineTo(190, 110);
ctx.stroke();

// iniciando uma nova linha com closePath
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(110, 110);
ctx.lineTo(190, 190);
ctx.lineTo(110, 190);
ctx.closePath();
ctx.stroke();


//circulo
let tela2 = document.getElementById("tela2");
let ctx2 = tela2.getContext("2d");
let x = 100;
let y = 100;
let raio = 90;
let anguloInicial = 0; //radianos
let anguloFinal = 2 * Math.PI;
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.lineWidth = 5;
ctx2.fillStyle = "white";
ctx2.arc(x, y, raio, anguloInicial, anguloFinal);
ctx2.fill();
ctx2.stroke();


//imagem dentro do canvas
let img = new Image();
img.src = "./assets/play.png";
img.onload = plotarImagem;

function plotarImagem() {
    ctx2.drawImage(this, 70, 70, 60, 60);
}


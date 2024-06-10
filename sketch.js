//variaveis da bolinha 
let xbolinha = 300;

let ybolinha = 200;

let diametro = 13;

let raio = diametro /2;

let colidiu = false;

//velocidade da bolinha 
let velocidadexbolinha = 6;

let velocidadeybolinha = 6;

//veriaveis da raquete 
let xraquete = 5;

let yraquete = 150;

let raquetecomprimento = 10;

let raquetealtura = 90;

//variaveis do oponente 
let xraqueteoponente = 585;

let yraqueteoponente = 150;

let velocidadeyoponente;

//placar do jogo 

let meuspontos = 0;

let pontosoponente = 0;

//sons do jogo

let raquetada;

let ponto;

let trilha;

function setup() {
  createCanvas(600,400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarbolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete(xraquete, yraquete);
  mostraraquete(xraqueteoponente, yraqueteoponente);
  movimentaminharaquete();
  //verificarcolisaodaraquete();
  verificacolisaoraquete(xraquete, yraquete);
  verificacolisaoraquete(xraqueteoponente, yraqueteoponente);
  movimentaraqueteoponente();
  incluirplacar();
  marcaponto();
  //player2();  
}

function mostrarbolinha() {
  circle (xbolinha, ybolinha, diametro)
}

function movimentabolinha() {
   xbolinha += velocidadexbolinha;
   ybolinha += velocidadeybolinha;  
}

function verificacolisaoborda() {
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height || ybolinha - raio < 0){
    velocidadeybolinha *= -1;
  }
}

function mostraraquete(x, y) {
  rect (x, y, raquetecomprimento, raquetealtura);
}

function movimentaminharaquete() {
  
  if(keyIsDown(87)) {
    yraquete -= 10;
  }
  
  if(keyIsDown(83)) {
    yraquete += 10;
  } 
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function verificacolisaoraquete(x, y) {
  colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if (colidiu) {
    velocidadexbolinha *= -1;
    raquetada.play();
  }
}

function incluirplacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450,10 ,40, 20);
  fill(255);
  text(pontosoponente, 470, 26);
}

function movimentaraqueteoponente() {
  velocidadeyoponente = ybolinha - yraqueteoponente - raquetecomprimento / 2 - 30;
  
  yraqueteoponente += velocidadeyoponente 
}

function player2() {
  if(keyIsDown(UP_ARROW)) {
  yraqueteoponente -= 10;
    }
  
  if(keyIsDown(DOWN_ARROW)) {
  xraqueteponente += 10;
   }
}
  
function marcaponto() {
  if(xbolinha > 590) {
    meuspontos += 1;
    }
  if(xbolinha < 10) {
    pontosoponente += 1;
    ponto.play();
    }
}

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto mp3");
  raquetada = loadSound("raquetada.mp3");
}
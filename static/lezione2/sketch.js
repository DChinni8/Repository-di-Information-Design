let xsize = 400;
let ysize = 400;
function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  background("#102C53");
  fill("#fff300");
  stroke("red");
  strokeWeight(10);
  circle(300,75,100);
  rect(0,200,400,200);

  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0,200,400,200);
  //ordine in p5 molto importante
  stroke("#fffdd0");
  strokeWeight(20);
  let xStars_prim= 10;
  let yStars_prim= 20;
  let passo=1;
  for(let i=0; i<30; i = i+passo){
    if(i%2==0){
      //corpo di ramo vero
      stroke("red");
    }else{
      //altrimenti questo
      stroke("#fff300")
    }
    strokeWeight(i*3);
    point(xStars_prim*i,yStars_prim+55);
  }
  //stella polare
  //point(xStars_prim+80,60);
  fill("white");
  stroke(0);
  strokeWeight(0);
  text("C'era una volta...",200,350);
}
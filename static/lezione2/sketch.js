let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Creiamo 500 stelle
  for (let i = 0; i < 500; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(1, 5)
    });
  }
}

function draw() {
  background(0);

  // Disegna le stelle
  for (let star of stars) {
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
    noStroke();
    fill(255);
    ellipse(star.x, star.y, star.size);
  }
}
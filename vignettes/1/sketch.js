function setup() {
    createCanvas(400, 400);
}

function draw() {
    if (mouseIfPressed) {
        fill(0);
    }
    else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
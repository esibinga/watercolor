
var c1, c2;

function setup() {
    createCanvas(1200, 500); //(x, y)
    //background(255);
    //  fillColor = color(110, 180, 200);

    //color randomness
    let a = random(256)
    let b = random(256)
    let c = random(256)
    let m = random(256)
    let n = random(256)
    let o = random(256)

    let c1 = color(a, b, c);
    let c2 = color(m, n, o);

    setGradient(c1, c2);

}

function draw() {
    ellipse(mouseX, mouseY, 30, 30);
}


// TO DO: extrapolate this to a function / for loop to generate as many quads as i want
// TO DO: define a, b, c within the loop for greater efficiency
function setGradient(c1, c2) {
    // noprotect
    noFill();

    for (var x = 3; x < width; x += width / 3) {
        for (var y = 0; y < 500; y++) {
            var inter = map(y, 0, 500, 0, 1);
            var c = lerpColor(c1, c2, inter);
            var cAgain = lerpColor(c2, c1, inter);
            stroke(c);
            quad(50, y, 100, y);
            stroke(cAgain);
            quad(150, y, 200, y);
            stroke(c);
            quad(250, y, 300, y);
            stroke(cAgain);
            quad(350, y, 400, y);
            stroke(c);
            quad(450, y, 500, y);
            stroke(cAgain);
            quad(550, y, 600, y);
            stroke(c);
            quad(650, y, 700, y);
            /*
                        beginShape();
                        //shape randomness
                        let i = random(50);
                        let j = random(50);
            
            
                        //stroke randomness
                        let d = random(10);
            
                        strokeWeight(1);
                        // N
                        curveVertex(0 + x, 250 + y); // determines curvature
                        curveVertex(150 + x, 150 + y);
                        // NE
                        curveVertex(270 + i + x, 180 + j + y);
                        // E
                        curveVertex(300 + x, 285 + y);
                        // SE
                        curveVertex(275 + i + x, 335 + j + y);
                        // S
                        curveVertex(150 + x, 400 + y);
                        // SW
                        curveVertex(45 + i + x, 345 + j + y);
                        // W
                        curveVertex(30 + x, 290 + y);
                        //NW
                        curveVertex(20 + i + x, 200 + j + y);
                        // end (N)
                        curveVertex(150 + x, 150 + y);
                        curveVertex(1000 + x, 250 + y); // determines curvature
                        endShape();*/
        }
    }
}
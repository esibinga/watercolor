
var c1, c2;
let button;

function setup() {
    createCanvas(1200, 500); //(x, y)

    // run the first gradient
    setGradient(c1, c2);

    setShape();

    //make a button that runs setGradient when clicked
    button = createButton('change colors');
    button.position(50, 30);
    button.mousePressed(setGradient);

    button = createButton('add shapes');
    button.position(50, 60);
    button.mousePressed(setShape);

}

function draw() {
    //ellipse(mouseX, mouseY, 30, 30);
    // console.log("x y is ", mouseX, mouseY)
}


// DONE: extrapolate this to a function / for loop to generate as many quads as i want

function setGradient() { //create color background
    clear();
    //color randomness
    let r1 = random(256)
    let g1 = random(256)
    let b1 = random(256)
    let r2 = random(256)
    let g2 = random(256)
    let b2 = random(256)
    let opacity1 = random();
    let opacity2 = random();

    let c1 = color(r1, g1, b1, random(128));
    let c2 = color(r2, g2, b2, random(128));
    // noprotect

    noFill();
    for (var x = 0; x < width; x += width / 3) {
        for (var y = 0; y < 230; y++) {
            var inter = map(y, 0, 230, 0, 1);
            var range = lerpColor(c1, c2, inter);
            var reverseRange = lerpColor(c2, c1, inter);

            // this uses stroke to make one line in each color over the map (so it can't be fill)

            stroke(range);
            rect(x, y, 200, 0);
            stroke(reverseRange);
            rect(x + 200, y, 200, 0);

        }
    }
}

function setShape() {
    for (var x = 0; x < width; x += width / 6) {
        for (var y = 0; y < 1; y++) {

            //shape randomness
            let i = random(25);
            let j = random(25);
            noStroke();
            fill(000);
            stroke(000);
            strokeWeight(2);

            // make shape - rectangle surrounding blob
            beginShape();
            vertex(x, 0);
            vertex(200 + x, 0);
            vertex(200 + x, 0);
            vertex(200 + x, 250);
            vertex(200 + x, 250);
            vertex(x, 250);
            vertex(x, 250);

            // erase(200, 255);
            erase(255, 255);

            // pretty sure you can't even really do a blob contour so this is truly just a mess

            // make blob - contour
            beginContour();
            // N
            vertex(0 + x, 0 + y);
            curveVertex(40 + x, 50 + y);
            //NW
            curveVertex(40 + i + x, 80 + j + y);
            // W
            curveVertex(45 + x, 125 + y);
            // SW
            curveVertex(55 + i + x, 165 + j + y);
            // S
            curveVertex(90 + x, 200 + y);
            // SE
            curveVertex(125 + i + x, 165 + j + y);
            // E
            curveVertex(170 + x, 105 + y);
            // NE
            curveVertex(120 + i + x, 60 + j + y);
            // end (N)
            curveVertex(70 + x, 50 + y);
            curveVertex(30 + x, 150 + y);
            endContour(CLOSE);

            endShape(CLOSE);

            noErase();
        }
    }

}
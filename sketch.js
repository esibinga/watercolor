// let's get something up there!!

// let colorValueIncrease = 1;
// let fillColor;
// let colorIncreaser;

function setup() {
    createCanvas(1200, 2400); //(x, y)
    background(255);
    fillColor = color(110, 180, 200);
    angleMode(DEGREES);
    // noStroke();
}

function draw() {
    noFill();
    noLoop(); //stops after one iteration instead of running continuously;  https://p5js.org/reference/#/p5/noLoop
    stroke(110, 180, 200); // teal blue

    // how do I make this generate a new random pair for every shape in the grid?



    for (var x = 30; x < width; x += width / 3) {
        for (var y = -130; y < height; y += height / 8) {
            stroke(110, 180, 200); // teal blue
            strokeWeight(1);

            // make shape
            beginShape();
            let i = random(50);
            let j = random(50);
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
            endShape();

        }
    }
    // replicate above but increment with random number in a range
    // beginShape();
    // // N
    // curveVertex(0, 150);
    // curveVertex(150 + 500, 150);
    // //curveVertex(150 + i + 500, 150 + j);
    // // NE
    // curveVertex(275 + i + 500, 210 + j);
    // // E
    // curveVertex(300 + 500, 275);
    // // SE
    // curveVertex(275 + i + 500, 335 + j);
    // // S
    // curveVertex(150 + 500, 400);
    // // SW
    // curveVertex(45 + i + 500, 345 + j);
    // // W
    // curveVertex(10 + 500, 250);
    // // end (N)
    // curveVertex(150 + 500, 150);
    // // curveVertex(150 + i + 500, 150 + j);
    // curveVertex(1000 + 500, 250); // determines curvature
    // endShape();

    /* TODO:
    --> make a grid of blobs
    --> different random() for each blob

    --> slider scale to increment randomness
    */


    /** increasing and decreasing angle width to create n-sided polygons inside a circle:
    beginShape();
    let spacing = map(mouseX, 0, width, 3, 140);
    for (let a = 0; a <= 360; a += spacing) {
        let i = 200 * sin(a) + 250;
        let j = 200 * cos(a) + 250;
        vertex(i, j);
    }
    endShape();
 */

    /**
     * manually placed vertices w curve
     
    beginShape();
    curveVertex(150, 150);
    curveVertex(150, 150);
    curveVertex(250, 160);
    curveVertex(300, 180);
    curveVertex(400, 200);
    curveVertex(300, 260);
    curveVertex(200, 280);
    curveVertex(100, 300);
    curveVertex(150, 150);
    curveVertex(1000, 250); //  figured this out with //curveVertex(mouseX, mouseY);
    endShape();
*/
}
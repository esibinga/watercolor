// let's get something up there!!

// let colorValueIncrease = 1;
// let fillColor;
// let colorIncreaser;

function setup() {
    createCanvas(1000, 500); //(x, y)
    background(0);
    fillColor = color(110, 180, 200);
    angleMode(DEGREES);
    // noStroke();
}

function draw() {
    noFill();
    noLoop(); //stops after one iteration instead of running continuously
    stroke(110, 180, 200); // teal blue


    let x = random(25);
    let y = random(25);
    // replicate above but increment with random number in a range
    beginShape();
    // N
    curveVertex(0, 150);
    curveVertex(150 + 500, 150);
    //curveVertex(150 + x + 500, 150 + y);
    // NE
    curveVertex(275 + x + 500, 210 + y);
    // E
    curveVertex(300 + 500, 275);
    // SE
    curveVertex(275 + x + 500, 335 + y);
    // S
    curveVertex(150 + 500, 400);
    // SW
    curveVertex(45 + x + 500, 345 + y);
    // W
    curveVertex(10 + 500, 250);
    // end (N)
    curveVertex(150 + 500, 150);
    // curveVertex(150 + x + 500, 150 + y);
    curveVertex(1000 + 500, 250); // determines curvature
    endShape();

    /* TODO:
    --> make a grid of blobs
    --> different random() for each blob

    --> slider scale to increment randomness
    */


    /** increasing and decreasing angle width to create n-sided polygons inside a circle:
    beginShape();
    let spacing = map(mouseX, 0, width, 3, 140);
    for (let a = 0; a <= 360; a += spacing) {
        let x = 200 * sin(a) + 250;
        let y = 200 * cos(a) + 250;
        vertex(x, y);
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
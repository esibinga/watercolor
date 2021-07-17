// let's get something up there!!

function setup() {
    createCanvas(1200, 2400); //(x, y)
    background(255);
    fillColor = color(110, 180, 200);
    // angleMode(DEGREES);
    // noStroke();
}

function draw() {
    noFill();
    noLoop(); //stops after one iteration instead of running continuously;  https://p5js.org/reference/#/p5/noLoop
    // stroke(110, 180, 200); // teal blue

    for (var x = 30; x < width; x += width / 3) {
        for (var y = -130; y < height; y += height / 7) {

            strokeWeight(1);

            // make shape
            beginShape();
            //shape randomness
            let i = random(50);
            let j = random(50);

            //color randomness
            let a = random(256)
            let b = random(256)
            let c = random(256)

            //stroke randomness
            let d = random(10);

            let c1 = color(a, b, c);
            let c2 = color(c, b, a);

            // console.log("c1", c1)
            // console.log("c2", c2)
            setGradient(c1, c2);

            // setGradient(c1, c2);

            // var inter = map(10, 0, 24, 0, 3);
            // var e = lerpColor(c1, c2, inter);
            // fill(e);
            // console.log("e", e)
            // console.log("inter", inter)


            //fill(a, b, c, 100)
            stroke(a, b, c, 70);
            strokeWeight(12);
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
}

function setGradient(c1, c2) {
    // noprotect
    noFill();
    for (var y1 = 0; y1 < 5; y1++) {
        // var inter = map(y, 0, height, 0, 1);
        // var c = lerpColor(c1, c2, inter);
        // fill(c);

        var inter = map(20, 0, 250, 0, 250);
        var e = lerpColor(c1, c2, inter);
        fill(e);
        line(0, 100, width, 100)
        // console.log("inter", inter) // should be between 0 and 1
        // console.log("y1", y1)
        // console.log("e", e)


        //line(0, y, width / 2, y);
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
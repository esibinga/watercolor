
var c1, c2;
//make these global so they can be accessed from any function
let buttonColor;
let buttonShape;
let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let r1;
let g1;
let b1;
let r2;
let g2;
let b2;

function setup() {
    createCanvas(1200, 500); //(x, y)

    // run the first gradient
    setGradient(c1, c2);
    setShape();

    //make a button that runs setGradient when clicked
    buttonColor = createButton('change colors');
    buttonColor.position(50, 30);
    buttonColor.mousePressed(setGradient);

    buttonShape = createButton('add shapes');
    buttonShape.position(50, 60);
    buttonShape.mousePressed(setShape);


    // make a slider
    // createSlider(min, max, startingValue)
    slider1 = createSlider(0, 256, r1)
    slider2 = createSlider(0, 256, g1)
    slider3 = createSlider(0, 256, b1)
    slider4 = createSlider(0, 256, r2)
    slider5 = createSlider(0, 256, g2)
    slider6 = createSlider(0, 256, b2)
    slider1.position(250, 30);
    slider2.position(250, 50);
    slider3.position(250, 70);
    slider4.position(450, 30);
    slider5.position(450, 50);
    slider6.position(450, 70);

    console.log("slider value", slider1.value())

    slider1.input(setGradient);
    slider2.input(setGradient);
    slider3.input(setGradient);
    slider4.input(setGradient);
    slider5.input(setGradient);
    slider6.input(setGradient);

    slider1.style('background-color', '#ff0000');
}

function draw() {
    //ellipse(mouseX, mouseY, 30, 30);
    // console.log("x y is ", mouseX, mouseY)

}


// DONE: extrapolate this to a function / for loop to generate as many quads as i want

function setGradient() { //create color background
    clear();

    //set color values using sliders
    if (slider1) { r1 = slider1.value() } else { r1 = random(256); }
    if (slider2) { g1 = slider2.value() } else { g1 = random(256); }
    if (slider3) { b1 = slider3.value() } else { b1 = random(256); }
    if (slider4) { r2 = slider4.value() } else { r2 = random(256); }
    if (slider5) { g2 = slider5.value() } else { g2 = random(256); }
    if (slider6) { b2 = slider6.value() } else { b2 = random(256); }

    console.log(r1)
    let c1 = color(r1, g1, b1, 128); //can add opacity as a 4th value (incl random(128))
    let c2 = color(r2, g2, b2, 128);
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
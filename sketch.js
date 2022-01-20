function setup() {
    createCanvas(windowWidth, windowHeight);

    // midpoints of x and y axis
    x_mid = windowWidth / 2;
    y_mid = windowHeight / 2;

    // quarters of x and y axis
    x_quart = windowWidth / 4;
    y_quart = windowHeight / 4;

}


function draw() {
    // to be made dynamic
    background(220);

    // rendering center line to split the canvas
    line(x_mid, 0, x_mid, windowHeight)

    // rendering arc to right side of centerline
    arc(x_mid, y_mid, x_quart, y_quart, -HALF_PI, HALF_PI)

}
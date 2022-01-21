function setup() {
    createCanvas(windowWidth, windowHeight);

    // midpoints of x and y axis
    x_mid = windowWidth / 2;
    y_mid = windowHeight / 2;

    // quarters of x and y axis
    x_quart = windowWidth / 4;
    y_quart = windowHeight / 4;

}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// assigning random initial color values to red, green, and blue respectively
let r = rand(0, 80);
let g = rand(81, 150);
let b = rand(151, 255);

// these are the values that will be varied in each respective component
let back_base = r + 50;
let arc_base = g - 60;
let tri_base = b - 25;

// rate at which color value will be incremented/decremented
let back_speed = 1;
let arc_speed = 1;
let tri_speed = 1;

function draw() {
    // to be made dynamic
    background(back_base, g, b);

    // rendering center line to split the canvas
    fill(0);
    line(x_mid, 0, x_mid, windowHeight);

    // rendering arc to right side of centerline
    fill(r, arc_base, b);
    arc(x_mid, y_mid, x_quart, y_mid, -HALF_PI, HALF_PI);

    // rendering triangle to left side of centerline
    fill(r, g, tri_base);
    triangle(x_mid, y_quart, x_mid, 3 * y_quart, x_quart, 3 * y_quart);

    back_base += back_speed;
    arc_base += arc_speed;
    tri_base += tri_speed;

    // incrementing or decrementing colors
    if (back_base >= 255 || back_base <= 0) {
        back_speed = back_speed * (-1);
    }

    if (arc_base >= 255 || arc_base <= 0) {
        arc_speed = arc_speed * (-1);
    }

    if (tri_base >= 255 || tri_base <= 0) {
        tri_speed = tri_speed * (-1);
    }

}
function setup() {
    createCanvas(windowWidth, windowHeight);

    // midpoints of x and y axis
    x_mid = windowWidth / 2;
    y_mid = windowHeight / 2;

    // quarters of x and y axis
    x_quart = windowWidth / 4;
    y_quart = windowHeight / 4;

    // origin of triangles
    // this is redundant but will be kept for clarity
    x_origin = x_mid + x_quart;
    y_origin = y_quart;

}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// assigning random initial color values to red, green, and blue respectively
let r = rand(100, 255);
let g = rand(86, 171);
let b = rand(172, 255);

// these are the values that will be varied in each respective component
let zero_base = r;
let one_base = g;
let two_base = r;
let three_base = r;
let four_base = g;
let back_base = b;

// rate at which color value will be incremented/decremented
let zero_speed = 1;
let one_speed = 1;
let two_speed = 1;
let three_speed = 1;
let four_speed = 1;
let back_speed = 1;


function draw() {
    // to be made dynamic
    background(0);

    /**
     * Triangles will be rendered from left to right in a ray-type polygon spanning the canvas
     */

    // triangle 0
    fill(rand(100, 255), 0, 0); // roughly brown
    triangle(x_origin, y_origin, 0.5 * x_quart, 1.5 * y_quart, x_quart, 3 * y_quart);

    // triangle 1
    fill(0, rand(100, 255), 0); // roughly orange
    triangle(x_origin, y_origin, x_quart, 3 * y_quart, 2 * x_quart, 3.5 * y_quart);

    // triangle 2
    fill(0, 0, rand(100, 255)); // roughly yellow
    triangle(x_origin, y_origin, 2 * x_quart, 3.5 * y_quart, 2.5 * x_quart, 3.6 * y_quart);

    // triangle 3
    fill(rand(100, 255), 0, 0);
    triangle(x_origin, y_origin, 2.5 * x_quart, 3.6 * y_quart, 3.2 * x_quart, 3.6 * y_quart);

    // triangle 4
    fill(97, 85, rand(100, 180));
    triangle(x_origin, y_origin, 3.2 * x_quart, 3.6 * y_quart, 3.8 * x_quart, 2.9 * y_quart);

    // // incrementing/decrementing color levels
    // zero_base += zero_speed;
    // one_base += one_speed;
    // two_base += two_speed;
    // three_base += three_speed;
    // four_base += four_speed;
    // back_base += back_speed;

    // // incrementing or decrementing colors
    // if (zero_base >= 255 || zero_base <= 100) {
    //     zero_speed = zero_speed * (-1);
    // }

    // if (one_base >= 255 || one_base <= 0) {
    //     one_speed = one_speed * (-1);
    // }

    // if (two_base >= 255 || two_base <= 0) {
    //     two_speed = two_speed * (-1);
    // }

    // if (three_base >= 255 || three_base <= 0) {
    //     three_speed = three_speed * (-1);
    // }

    // if (four_base >= 255 || four_base <= 0) {
    //     four_speed = four_speed * (-1);
    // }

    // if (back_base >= 255 || back_base <= 0) {
    //     back_speed = back_speed * (-1);
    // }
}
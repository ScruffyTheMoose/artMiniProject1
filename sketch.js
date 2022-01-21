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

function draw() {
    // to be made dynamic
    background(0);

    // all shapes have corners plotted clockwise from top-right

    fill(255, 0, 0);
    rect(x_mid, y_quart, y_quart, y_mid);

    fill(0, 255, 0);
    quad(x_mid, y_quart, x_mid, 3 * y_quart, 0.9 * x_mid, 2.9 * y_quart, 0.9 * x_mid, 1.1 * y_quart);

    fill(0, 0, 255);
    quad(0.9 * x_mid, 1.1 * y_quart, 0.9 * x_mid, 2.9 * y_quart, )


}
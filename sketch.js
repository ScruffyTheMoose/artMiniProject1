/**
 * The setup() method will set the dimensions for the canvas and initialize all dimension variables for rendering.
 */
function setup() {

    /**
     * Setting window width and height to match to have universally square canvas.
     * The form of the drawn cubes is dependent on the dimensions of the canvas so this is necessary.
     */
    WIDTH = windowHeight
    HEIGHT = windowHeight
    createCanvas(WIDTH, HEIGHT);

    // used to shift second cube down and left
    // larger than true quarter so that there is a gap between objects
    x_quart = WIDTH / 3.5;
    y_quart = HEIGHT / 3.5;

    // one-eight the canvas dimension which is used to plot corners of cubes
    x_oct = WIDTH / 8;
    y_oct = HEIGHT / 8;
}

/**
 * The draw() method will build the canvas and render all objects given within the code block.
 */
function draw() {

    // setting background color
    background(0, 100, 100);

    /**
     * Top Left Cube is drawn in this section using three 4-cornered polygons.
     * Face plotting order -> (TL, TR, BR, BL)
     * Top plotting order -> (BL, BR, TR, TL)
     * Side plotting order -> (BL, TL, TR, BR)
     */

    // face
    fill(200, 0, 100);
    quad(x_oct, y_oct, 3 * x_oct, y_oct, 3 * x_oct, 3 * y_oct, x_oct, 3 * y_oct);

    // top
    fill(100, 50, 100);
    quad(x_oct, y_oct, 3 * x_oct, y_oct, 4 * x_oct, y_oct / 2, 2 * x_oct, y_oct / 2);

    // bottom
    fill(150, 100, 100);
    quad(3 * x_oct, 3 * y_oct, 3 * x_oct, y_oct, 4 * x_oct, y_oct / 2, 4 * x_oct, 2.5 * y_oct);


    /**
     * Bottom Right Cube is drawn in this section using identicle coordinates as TLC but shifted down and right.
     * And yeah this block of code is pretty unreadable but it was very annoying to set up so I'm leaving it.
     * Face plotting order -> (TL, TR, BR, BL)
     * Top plotting order -> (BL, BR, TR, TL)
     * Side plotting order -> (BL, TL, TR, BR)
     */

    fill(50, 100, 100);
    quad(x_oct + x_quart, y_oct + y_quart, 3 * x_oct + x_quart, y_oct + y_quart, 3 * x_oct + x_quart, 3 * y_oct + y_quart, x_oct + x_quart, 3 * y_oct + y_quart);

    fill(100, 100, 50);
    quad(x_oct + x_quart, y_oct + y_quart, 3 * x_oct + x_quart, y_oct + y_quart, 4 * x_oct + x_quart, y_oct / 2 + y_quart, 2 * x_oct + x_quart, y_oct / 2 + y_quart);

    fill(200, 100, 0);
    quad(3 * x_oct + x_quart, 3 * y_oct + y_quart, 3 * x_oct + x_quart, y_oct + y_quart, 4 * x_oct + x_quart, y_oct / 2 + y_quart, 4 * x_oct + x_quart, 2.5 * y_oct + y_quart);

}
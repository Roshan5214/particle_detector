const r = require("raylib");
const scanner = require("./scanner");

function running() {
    return !r.WindowShouldClose();
}

const screenWidth = 300;
const screenHeight = 200;
const FPS = 60;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Particle Detector");
    r.SetTargetFPS(FPS);
}

let scannerDirection;

function update() {
    scannerDirection = scanner.scannerDirection(
        scannerX,
        scannerWidth,
        screenWidth,
        scannerDirection,
    );
    scannerX += scannerDirection;

    scannerColor = scanner.areRangesOverlapping(
        scannerX,
        scannerWidth,
        particleX,
        particleWidth,
    )
        ? r.RED
        : r.WHITE;
}

let scannerX = 0;
const scannerY = 0;
const scannerWidth = screenWidth / 15;
const scannerHeight = screenHeight;
let scannerColor;

const particleX = screenWidth / 3;
const particleY = 0;
const particleWidth = screenWidth / 6;
const particleHeight = screenHeight;
const particleColor = r.BLUE;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(
        particleX,
        particleY,
        particleWidth,
        particleHeight,
        particleColor,
    );
    r.DrawRectangle(
        scannerX,
        scannerY,
        scannerWidth,
        scannerHeight,
        scannerColor,
    );

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};

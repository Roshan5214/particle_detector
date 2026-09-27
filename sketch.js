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
}

let scannerX = 0;
const scannerY = 0;
const scannerWidth = 20;
const scannerHeight = screenHeight;

const particleX = screenWidth / 3;
const particleY = 0;
const particleWidth = 50;
const particleHeight = screenHeight;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(
        particleX,
        particleY,
        particleWidth,
        particleHeight,
        r.BLUE,
    );
    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, r.WHITE);

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

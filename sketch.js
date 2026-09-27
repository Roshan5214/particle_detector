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
        x,
        scannerWidth,
        screenWidth,
        scannerDirection,
    );
    x += scannerDirection;
}

let x = 0;
let y = 0;
const scannerWidth = 20;
const scannerHeight = screenHeight;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(100, 0, 50, screenHeight, r.BLUE);
    r.DrawRectangle(x, y, scannerWidth, scannerHeight, r.WHITE);

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

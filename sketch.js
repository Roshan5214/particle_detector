const r = require("raylib");
const scanner = require("./scanner");

function chooseColor(doRangesOverlap) {
    return doRangesOverlap ? r.RED : r.WHITE;
}

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

    scannerColor = chooseColor(
        scanner.doRangesOverlap(
            scannerX,
            scannerWidth,
            particle1_x,
            particle1_width,
        ) ||
            scanner.doRangesOverlap(
                scannerX,
                scannerWidth,
                particle2_x,
                particle2_width,
            ),
    );
}

let scannerX = 0;
const scannerY = 0;
const scannerWidth = screenWidth / 15;
const scannerHeight = screenHeight;
let scannerColor;

const particle1_x = screenWidth / 3;
const particle1_y = 0;
const particle1_width = screenWidth / 6;
const particle1_height = screenHeight;
const particleColor = r.BLUE;

const particle2_x = screenWidth / 1.5;
const particle2_y = 0;
const particle2_width = screenWidth / 60;
const particle2_height = screenHeight;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(
        particle1_x,
        particle1_y,
        particle1_width,
        particle1_height,
        particleColor,
    );
    r.DrawRectangle(
        particle2_x,
        particle2_y,
        particle2_width,
        particle2_height,
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

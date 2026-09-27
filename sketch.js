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

let scanner1_direction, scanner2_direction;

function update() {
    scanner1_direction = scanner.scannerDirection(
        scanner1_x,
        0,
        scanner1_width,
        screenWidth / 2,
        scanner1_direction,
    );
    scanner1_x += scanner1_direction * 1;

    scanner2_direction = scanner.scannerDirection(
        scanner2_x,
        screenWidth / 2,
        scanner2_width,
        screenWidth,
        scanner2_direction,
    );
    scanner2_x += scanner2_direction * 2;

    scanner1_color = chooseColor(
        scanner.doRangesOverlap(
            scanner1_x,
            scanner1_width,
            particle1_x,
            particle1_width,
        ),
    );

    scanner2_color = chooseColor(
        scanner.doRangesOverlap(
            scanner2_x,
            scanner2_width,
            particle2_x,
            particle2_width,
        ) ||
            scanner.doRangesOverlap(
                scanner2_x,
                scanner2_width,
                particle1_x,
                particle1_width,
            ),
    );
}

let scanner1_x = 0;
const scanner1_y = 0;
const scanner1_width = screenWidth / 15;
const scanner1_height = screenHeight;
let scanner1_color;

let scanner2_x = screenWidth / 2;
const scanner2_y = 0;
const scanner2_width = screenWidth / 15;
const scanner2_height = screenHeight;
let scanner2_color = r.WHITE;

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
        scanner1_x,
        scanner1_y,
        scanner1_width,
        scanner1_height,
        scanner1_color,
    );
    r.DrawRectangle(
        scanner2_x,
        scanner2_y,
        scanner2_width,
        scanner2_height,
        scanner2_color,
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

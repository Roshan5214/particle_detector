const r = require("raylib");
const d = require("./detector");
const d1 = require("./detector1");
const d2 = require("./detector2");
const d3 = require("./detector3");

let field1Start;
const field1Width = 50;

let field2Start;
const field2Width = 10;

let field3Start;
const field3Width = 30;

function running() {
    return !r.WindowShouldClose();
}

function setup(width, height, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(60);

    field1Start = width / 3;
    field2Start = width / 1.5;
    field3Start = height / 2.5;
    d2.start = width / 2;
}

function hasDetectorDetectedAnyField(ds, dw, fs1, fw1, fs2, fw2) {
    return (
        d.hasDetectorDetected(ds, dw, fs1, fw1) ||
        d.hasDetectorDetected(ds, dw, fs2, fw2)
    );
}

function update() {
    d1.velocity = d.calculateDetectorVelocity(
        d1.start,
        d1.start + d1.width,
        0,
        r.GetScreenWidth() / 2,
        d1.velocity,
    );
    d1.start = d.calculateDetectorPosition(d1.start, d1.velocity);

    d2.velocity = d.calculateDetectorVelocity(
        d2.start,
        d2.start + d2.width,
        r.GetScreenWidth() / 2,
        r.GetScreenWidth(),
        d2.velocity,
    );
    d2.start = d.calculateDetectorPosition(d2.start, d2.velocity);

    d3.velocity = d.calculateDetectorVelocity(
        d3.start,
        d3.start + d3.width,
        0,
        r.GetScreenHeight(),
        d3.velocity,
    );
    d3.start = d.calculateDetectorPosition(d3.start, d3.velocity);

    let hasField1Detected = hasDetectorDetectedAnyField(
        d1.start,
        d1.width,
        field1Start,
        field1Width,
        field2Start,
        field2Width,
    );

    d1.color = d.chooseDetectorColor(hasField1Detected);

    let hasField2Detected = hasDetectorDetectedAnyField(
        d2.start,
        d2.width,
        field1Start,
        field1Width,
        field2Start,
        field2Width,
    );

    d2.color = d.chooseDetectorColor(hasField2Detected);

    let hasField3Detected = d.hasDetectorDetected(
        d3.start,
        d3.width,
        field3Start,
        field3Width,
    );

    d3.color = d.chooseDetectorColor(hasField3Detected);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    d.drawHorizontalField(field1Start, field1Width);
    d.drawHorizontalField(field2Start, field2Width);

    d.drawVerticalField(field3Start, field3Width);

    d.drawHorizontalDetector(d1.start, d1.width, d1.color);
    d.drawHorizontalDetector(d2.start, d2.width, d2.color);

    d.drawVerticalDetector(d3.start, d3.width, d3.color);

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

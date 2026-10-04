const r = require("raylib");
const d = require("./detector");
const f = require("./field");

function running() {
    return !r.WindowShouldClose();
}

function setup(width, height, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(60);

    return {
        detector1: d.createDetector(0, width / 15, 1, false, "x"),
        detector2: d.createDetector(
            r.GetScreenWidth() / 2,
            width / 15,
            2,
            false,
            "x",
        ),
        detector3: d.createDetector(0, width / 15, 1, false, "y"),

        field1: f.createField(width / 3, width / 6, "x"),
        field2: f.createField(width / 1.5, width / 30, "x"),
        field3: f.createField(height / 2.5, height / 10, "y"),
    };
}

function update(world) {
    d.update(
        world.detector1,
        world.field1,
        0,
        r.GetScreenWidth() / 2,
        world.field2,
    );
    d.update(
        world.detector2,
        world.field1,
        r.GetScreenWidth() / 2,
        r.GetScreenWidth(),
        world.field2,
    );
    d.update(
        world.detector3,
        world.field3,
        0,
        r.GetScreenHeight(),
        world.field3,
    );
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    f.draw(world.field1);
    f.draw(world.field2);
    f.draw(world.field3);

    d.draw(world.detector1);
    d.draw(world.detector2);
    d.draw(world.detector3);

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

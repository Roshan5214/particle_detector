const r = require("raylib");

function createDetector(start, width, velocity, hasDetected, axis) {
    return { start, width, velocity, hasDetected, axis };
}

function update(detector, field1, start, end, field2) {
    detector.start = calculatePosition(detector, start, end);
    detector.hasDetected =
        overlaps(detector, field1) || overlaps(detector, field2);
    detector.color = chooseColor(detector);
}

function chooseColor(detector) {
    return detector.hasDetected ? r.RED : r.WHITE;
}

function draw(detector) {
    if (detector.axis === "x") {
        r.DrawRectangle(
            detector.start,
            0,
            detector.width,
            r.GetScreenHeight(),
            detector.color,
        );
        return;
    }
    r.DrawRectangle(
        0,
        detector.start,
        r.GetScreenWidth(),
        detector.width,
        detector.color,
    );
}

function isOutOfbounds(detector, start1, end1) {
    const start2 = detector.start;
    const end2 = detector.start + detector.width;
    return end2 > end1 || start2 < start1;
}

function calculateVelocity(detector, start, end) {
    detector.velocity = isOutOfbounds(detector, start, end)
        ? -detector.velocity
        : detector.velocity;
    return detector.velocity;
}

function calculatePosition(detector, start, end) {
    return detector.start + calculateVelocity(detector, start, end);
}

function overlaps(detector, field) {
    const start1 = detector.start;
    const end1 = detector.start + detector.width;
    const start2 = field.start;
    const end2 = field.start + field.width;
    return !(end1 < start2 || end2 < start1);
}

module.exports = {
    createDetector,
    update,
    draw,
};

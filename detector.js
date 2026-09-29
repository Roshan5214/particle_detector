const r = require("raylib");

function isDetectorOutOfbounds(start1, end1, start2, end2) {
    return end1 > end2 || start1 < start2;
}

function calculateDetectorVelocity(s1, e1, s2, e2, velocity) {
    return isDetectorOutOfbounds(s1, e1, s2, e2) ? -velocity : velocity;
}

function calculateDetectorPosition(start, velocity) {
    return start + velocity;
}

function hasDetectorDetected(start1, width1, start2, width2) {
    const end1 = start1 + width1;
    const end2 = start2 + width2;
    return !(end1 < start2 || end2 < start1);
}

function chooseDetectorColor(hasDetectorDetected) {
    return hasDetectorDetected ? r.RED : r.WHITE;
}

function drawHorizontalField(x, w) {
    r.DrawRectangle(x, 0, w, r.GetScreenHeight(), r.BLUE);
}

function drawHorizontalDetector(x, w, color) {
    r.DrawRectangle(x, 0, w, r.GetScreenHeight(), color);
}

function drawVerticalField(y, h) {
    r.DrawRectangle(0, y, r.GetScreenWidth(), h, r.BLUE);
}

function drawVerticalDetector(y, h, color) {
    r.DrawRectangle(0, y, r.GetScreenWidth(), h, color);
}

module.exports = {
    isDetectorOutOfbounds,
    calculateDetectorVelocity,
    calculateDetectorPosition,
    hasDetectorDetected,
    chooseDetectorColor,
    drawHorizontalField,
    drawHorizontalDetector,
    drawVerticalField,
    drawVerticalDetector,
};

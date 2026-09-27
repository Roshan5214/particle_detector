function scannerDirection(x, scannerWidth, screenWidth, scannerDirection) {
    if (x === 0) {
        return 1;
    } else if (x + scannerWidth === screenWidth) {
        return -1;
    } else {
        return scannerDirection;
    }
}

module.exports = {
    scannerDirection,
};

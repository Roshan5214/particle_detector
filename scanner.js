function scannerDirection(
    scannerX,
    scannerWidth,
    screenWidth,
    scannerDirection,
) {
    if (scannerX === 0) {
        return 1;
    } else if (scannerX + scannerWidth === screenWidth) {
        return -1;
    } else {
        return scannerDirection;
    }
}

function areRangesOverlapping(
    scannerX,
    scannerWidth,
    particleX,
    particleWidth,
) {
    let d = particleX + particleWidth - scannerX;
    if (d <= scannerWidth + particleWidth && d >= 0) {
        return true;
    }
    return false;
}

module.exports = {
    scannerDirection,
    areRangesOverlapping,
};

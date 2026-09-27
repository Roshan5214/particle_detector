function scannerDirection(current, start, scannerWidth, end, scannerDirection) {
    if (current === start) {
        return 1;
    } else if (current + scannerWidth >= end) {
        return -1;
    } else {
        return scannerDirection;
    }
}

function doRangesOverlap(scannerX, scannerWidth, particleX, particleWidth) {
    let d = particleX + particleWidth - scannerX;
    if (d <= scannerWidth + particleWidth && d >= 0) {
        return true;
    }
    return false;
}

module.exports = {
    scannerDirection,
    doRangesOverlap,
};

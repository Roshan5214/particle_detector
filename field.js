const r = require("raylib");

function createField(start, width, axis) {
    return { start, width, axis };
}

function draw(field) {
    if (field.axis === "x") {
        r.DrawRectangle(
            field.start,
            0,
            field.width,
            r.GetScreenHeight(),
            r.BLUE,
        );
        return;
    }
    r.DrawRectangle(0, field.start, r.GetScreenWidth(), field.width, r.BLUE);
}

module.exports = {
    createField,
    draw,
};

const sketch = require("./sketch");

function loop(world) {
    while (sketch.running()) {
        sketch.update(world);
        sketch.draw(world);
    }
}

function main() {
    const width = 300;
    const height = 200;
    const title = "Particle Detector";

    const world = sketch.setup(width, height, title);
    loop(world);
    sketch.teardown();
}

main();

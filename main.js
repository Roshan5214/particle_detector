const sketch = require("./sketch");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    const width = 300;
    const height = 200;
    const title = "Particle Detector";

    sketch.setup(width, height, title);
    loop();
    sketch.teardown();
}

main();

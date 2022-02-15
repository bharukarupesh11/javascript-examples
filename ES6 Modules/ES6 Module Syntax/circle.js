// Implementation Details - Not exposed to outside world
const _radius = new WeakMap();

// Public Interface
export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radiuse ' +_radius.get(this));
    }
}
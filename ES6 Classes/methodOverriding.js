
class Shape {
    move() {
        console.log('shape move');
    }
}

class Circle extends Shape {

    // overriding move of shape
    move () {
        super.move(); // calling super  class move method
        console.log('circle move');
    }
}

const c = new Circle();

c.move(); // circle move will be called
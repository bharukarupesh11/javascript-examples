
// ConstructorFunction
function Circle(radius) {
    this.radius = radius;

    // Private member 
    let defaultLocation = {x: 0, y: 0};

    // Getter Method First Approach: Accessing a member by calling a funtion 
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    // Getter and Setter using defineProperty() method of Object class
    Object.defineProperty(this, 'defaultLocation', {
      get: function() {
          console.log('Inside getter');
          return defaultLocation;
      },
      set: function(value) {
        defaultLocation = value;
      }
    });

    this.draw = function(){
        console.log('drawing a circle');
    };
}

const circle = new Circle(10);

// Accessing using a method
console.log(circle.getDefaultLocation());

// Accessing defaultLocation using a property name
console.log(circle.defaultLocation); // get function will be called

// Setting defaultLocation using a property name
circle.defaultLocation = {x: 1, y:1};
// After setting defaultLocation above
console.log(circle.defaultLocation); // get function will be called


circle.draw();
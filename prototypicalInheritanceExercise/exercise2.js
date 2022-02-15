// Polymorphism Inheritance Exercise


// Constructor Function
function HTMLElement(){
    this.click = function() {
        console.log('clicking');
    };
}

HTMLElement.prototype.focus = function () {
    console.log('focus');
}


function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = function() {
        return `
        <select>${this.items.map(item =>`
            <option>${item}</option>`).join('')}
        </select>`;
    }
}


HtmlSelectElement.prototype = new HTMLElement(); // This'll give us access to instance as well as base methods
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


function HtmlImageElement (src) {
    this.src = src;

    this.render = function() {
        return `<img src="${src}"/>`
    };
}

HtmlImageElement.prototype = new HTMLElement(); // This'll give us access to instance as well as base methods
HtmlImageElement.prototype.constructor = HtmlImageElement;



// explore element in chrome console and you will see you have inherited click and focus method of HTMLElement
const objects = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement("https://")
];

for (o of objects)
    console.log(o.render()); // Polymorphism: It'll call render() method depending on the type of object it gets

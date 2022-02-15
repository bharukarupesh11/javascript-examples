// Prototypical Inheritance Exercise


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
}


HtmlSelectElement.prototype = new HTMLElement(); // This'll give us access to instance as well as base methods
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


// explore element in chrome console and you will see you have inherited click and focus method of HTMLElement
const element = new HtmlSelectElement([1,2,3]); 


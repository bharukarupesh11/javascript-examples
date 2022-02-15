
const _items = new WeakMap();

class Stack {
    constructor (){
        _items.set(this, []); // setting empty array as a value
    }

    push (obj) {
        _items.get(this).push(obj);
    }

    pop () {
        const items = _items.get(this); // returns an array

        if (items.length === 0)
            throw new Error('Stack is Empty.');

        return items.pop();
    }

    peek () {
        const items = _items.get(this); // returns an array

        if (items.length === 0)
            throw new Error('Stack is Empty.');

        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }

}

const s = new Stack();

s.push('a');
s.push('b');
s.push('c');

console.log(s.count);

console.log(s.pop());
console.log(s.count);
console.log(s.peek());
console.log(s.count);
console.log(s.pop());
console.log(s.count);
console.log(s.pop());
console.log(s.pop());

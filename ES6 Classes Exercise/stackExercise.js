
const _items = new WeakMap();

class Stack {
    constructor (){
        _items.set(this, []); // key-value: this obj is a key and empty array is a value
    }

    push (obj) {
        _items.get(this).push(obj);
    }

    pop () {
        const items = _items.get(this); // given a key returns an array as a value

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

console.log('Count: ', s.count); // Output: 3

console.log(s.pop()); // Output: c
console.log(s.count); // Output: 2
console.log(s.peek()); // Output: b
console.log(s.count); // Output: 2
console.log(s.pop()); // Output: b
console.log(s.count); // Output: 1
console.log(s.pop()); // Output: a
console.log(s.pop()); // // Output: throws error 'Stack is Empty' because we've popped all the elements 

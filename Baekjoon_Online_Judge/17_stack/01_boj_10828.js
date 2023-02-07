const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

class Stack {
	constructor(){
		this.stack = [];
	}
    push(n) {
        this.stack.push(n);
        return;
    }
    pop() {
        if (this.stack.length === 0) {
            return -1;
        } else {
            return this.stack.pop();
        }
    }
    size() {
        return this.stack.length;
    }
    empty() {
        if (this.stack.length === 0) {
            return 1;
        } else {
            return 0;
        }
    }
    top() {
        if (this.stack.length === 0) {
            return -1;
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
}

const newStack = new Stack();
const result = input.map((order) => {
    order = order.split(" ");
    switch (order[0]) {
        case "push":
            return newStack.push(order[1]);
        case "pop":
            return newStack.pop();
        case "size":
            return newStack.size();
        case "empty":
            return newStack.empty();
        case "top":
            return newStack.top();
    }
});

console.log(result.filter(v => v !== undefined).join(" "));
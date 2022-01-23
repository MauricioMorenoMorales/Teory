const stack1: Array<number> = [];

// Puedes remplazar los elementos del final del stack así
stack1.push(7);
stack1.push(7);
stack1.pop();
stack1.push(stack1.pop() * 3);
stack1.push(40);
stack1.push(stack1.pop() / 2);

// El termino para referirse al accesso del elemento superior de el stack es el "peek"
// Este no cambia el stack al momento de acceder a él

// Ejemplo de estack con cambios en el estado

const stackExample: Array<number> = [];

stackExample.push(1);
stackExample.push(2);
stackExample.push(3);
stackExample.push(4);
stackExample.push(5);
//? [1,2,3,4,5]

stackExample.push(stackExample.pop() + stackExample.pop()); // [1,2,3,9]
stackExample.push(stackExample.pop() * stackExample.pop()); // [1,2,27]
stackExample.push(stackExample.pop() + stackExample.pop()); // [1,29]
stackExample.push(stackExample.pop() * stackExample.pop()); // [29]

// implementacion de un stack

interface IStack<T> {
	push(item: T): void;
	pop(): T | undefined;
	peek(): T | undefined;
	size(): number;
}

class Stack<T> implements IStack<T> {
	private storage: T[] = [];

	constructor(private capacity: number = Infinity) {}

	push(item: T): void {
		if (this.size() === this.capacity) {
			throw Error('Stack has reached max capacity, you cannot add more items');
		}
		this.storage.push(item);
	}

	pop(): T | undefined {
		return this.storage.pop();
	}

	peek(): T | undefined {
		return this.storage[this.size() - 1];
	}

	size(): number {
		return this.storage.length;
	}
}

const stack = new Stack<string>();
stack.push('A');
stack.push('B');

stack.size(); // Output: 2
stack.peek(); // Output: "B"
stack.size(); // Output: 2
stack.pop(); // Output: "B"
stack.size(); // Output: 1

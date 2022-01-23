/*
Los stacks tienen 4 operadores distintos
enqueue(element) |> inserta el elemento a el tail de la queue
dequeue() |> Elimina el elemento en la cabeza de la queue y retorna su valor

size() |> Retorna el tamaño de la queue
peek() |> muestra la cabeza de la queue sin cambiar el queue
*/

interface IQueue<T> {
	enqueue(item: T): void;
	dequeue(): T | undefined;
	size(): number;
	peek(): T;
	getQueue(): Array<T>;
}

class Queue<T> implements IQueue<T> {
	private storage: Array<T> = [];

	constructor(private capacity: number = Infinity) {}

	enqueue(item: T): void {
		if (this.size() === this.capacity) {
			throw Error('Queue has reached max capacity, you cannot add more items');
		}
		this.storage.push(item);
	}
	dequeue(): T | undefined {
		return this.storage.shift();
	}
	size(): number {
		return this.storage.length;
	}
	peek(): T {
		return this.storage[this.storage.length - 1];
	}
	getQueue() {
		return this.storage;
	}
}

const numbers = new Queue<number>();

//? Que se obtiene de acá?
numbers.enqueue(3);
numbers.enqueue(numbers.dequeue()! * 4);
numbers.enqueue(5)
numbers.enqueue(numbers.dequeue()! * 3)
numbers.enqueue(503)

console.log(numbers.getQueue());

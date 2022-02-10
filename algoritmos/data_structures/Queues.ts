/*
Los stacks tienen 4 operadores distintos
enqueue(element) |> inserta el elemento a el tail de la queue
dequeue() |> Elimina el elemento en la cabeza de la queue y retorna su valor

size() |> Retorna el tamaño de la queue
peek() |> muestra la cabeza de la queue sin cambiar el queue
*/

interface IQueue<T> {
	enqueue: (item: T) => void;
	dequeue(): T | undefined;
	size(): number;
	peek(): T;
	getQueue(): Array<T>;
}

class Queue<T> implements IQueue<T> {
	private storage: Array<T> = [];

	constructor(private capacity: number = Infinity) {}

	public enqueue(item: T): void {
		if (this.size() === this.capacity) {
			throw Error('Queue has reached max capacity, you cannot add more items');
		}
		this.storage.push(item);
	}
	public dequeue(): T | undefined {
		return this.storage.shift();
	}
	public size(): number {
		return this.storage.length;
	}
	public peek(): T {
		return this.storage[this.storage.length - 1];
	}
	public getQueue() {
		return this.storage;
	}
}

const numbers = new Queue<number>();

//? Que se obtiene de acá?
numbers.enqueue(3);
numbers.enqueue(numbers.dequeue()! * 4);
numbers.enqueue(5);
numbers.enqueue(numbers.dequeue()! * 3);
numbers.enqueue(503);

console.log(numbers.getQueue());

export interface IPointerQueue<T> {
	enqueue(data: T): void;
	dequeue(): T;
	peek(): T;
}

export class PointerQueue<T> implements IPointerQueue<T> {
	private head: number;
	private tail: number;
	private queue: Array<T> = [];

	constructor(size: number) {
		this.head = this.tail = -1;
		this.queue = new Array(size);
	}

	public enqueue(data: T): void {
		if (this.isFull()) throw Error('The Queue is full');
		if (this.isEmpty()) this.head++;
		this.queue[this.tail++] = data;
	}

	public dequeue(): T {
		if (this.isEmpty()) throw Error('The queue is empty');
		const temp: T = this.queue[this.head];
		if (this.head === this.tail) this.head = this.tail = -1;
		else this.head++;
		return temp;
	}

	public peek(): T {
		if (this.isEmpty()) throw Error('The queue is empty');
		return this.queue[this.head];
	}

	private isEmpty(): boolean {
		return this.head === -1;
	}
	private isFull(): boolean {
		return this.tail === this.queue.length - 1;
	}
}

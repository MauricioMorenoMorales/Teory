interface ICircularQueue<T> {
	enqueue(data: T): any;
	dequeue(): T;
	peek(): T;
}

// front => head
// rear => tail

class CircularQueue<T> implements ICircularQueue<T> {
	private head: number;
	private tail: number;
	private queue: Array<T> = [];
	constructor(initialSize: number) {
		this.head = this.tail = -1;
		this.queue = new Array(initialSize);
	}

	private resize(): void {
		let tempArr = new Array<T>(this.queue.length * 2);
		let i = 0;
		let j = this.head;

		do {
			tempArr[i++] = this.queue[j];
			j = (j + 1) % this.queue.length;
		} while (j !== this.head);

		this.head = 0;
		this.tail = this.queue.length - 1;
		this.queue = tempArr;
	}
	private isFull(): boolean {
		return (this.tail + 1) % this.queue.length === this.head;
	}
	private isEmpty(): boolean {
		return this.head === -1;
	}

	public enqueue(data: T): void {
		if (this.isFull()) this.resize();
		else if (this.isEmpty()) this.head++;
		this.tail = (this.tail + 1) % this.queue.length;
		this.queue[this.tail] = data;
	}

	public dequeue(): T {
		if (this.isEmpty()) throw Error('The queue is empty');
		const temp: T = this.queue[this.head];
		if (this.head === this.tail) this.head = this.tail = -1;
		else this.head = (this.head + 1) % this.queue.length;
		return temp;
	}

	public peek(): T {
		if (this.isEmpty()) throw Error('The queue is empty');
		return this.queue[this.head];
	}
}


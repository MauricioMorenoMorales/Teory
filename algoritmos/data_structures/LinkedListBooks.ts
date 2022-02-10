export class Libro {
	private titulo: string;
	private autor: string;
	private isbn: string;

	constructor(titulo: string, autor: string, isbn: string) {
		this.titulo = titulo;
		this.autor = autor;
		this.isbn = isbn;
	}
	public getTitulo(): string {
		return this.titulo;
	}
	public setTitulo(titulo: string): void {
		this.titulo = titulo;
	}
	public getAutor(): string {
		return this.autor;
	}
	public setAutor(autor: string): void {
		this.autor = autor;
	}
	public getIsbn(): string {
		return this.isbn;
	}
	public setIsbn(isbn: string): void {
		this.isbn = isbn;
	}
}

export class Node<T> {
	public next: Node<T> | null = null;
	public prev: Node<T> | null = null;
	constructor(public data: T) {}
}

interface ILinkedList<T> {
	insertInBegin(data: T): Node<T>;
	insertAtEnd(data: T): Node<T>;
	deleteNode(node: Node<T>): void;
	traverse(): T[];
	size(): number;
	search(comparator: (data: T) => boolean): Node<T> | null;
}

export class LinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null;
	public insertInBegin(data: T): Node<T> {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		return node;
	}
	public insertAtEnd(data: T): Node<T> {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			const getLast = (node: Node<T>): Node<T> =>
				node.next ? getLast(node.next) : node;
			const lastNode = getLast(this.head);
			node.prev = lastNode;
			lastNode.next = node;
		}
		return node;
	}
	public deleteNode(node: Node<T> | null): void {
		if (!node) return;
		if (!node.prev) {
			this.head = node.next;
		} else {
			const prevNode = node.prev;
			prevNode.next = node.next;
		}
	}
	public traverse(): T[] {
		const array: T[] = [];
		if (!this.head) {
			return array;
		}
		const addToArray = (node: Node<T>): T[] => {
			array.push(node.data);
			return node.next ? addToArray(node.next) : array;
		};
		return addToArray(this.head);
	}
	public size(): number {
		return this.traverse().length;
	}
	public search(comparator: (data: T) => boolean): Node<T> | null {
		const checkNext = (node: Node<T>): Node<T> | null => {
			if (comparator(node.data)) return node;
			return node.next ? checkNext(node.next) : null;
		};
		return this.head ? checkNext(this.head) : null;
	}
	public insertAfter(comparator: (data: T) => boolean, data: T): Node<T> {
		const findedElement = this.search(comparator);
		if (!findedElement) {
			return this.insertInBegin(data);
		}
		const newNode = new Node(data);
		newNode.prev = findedElement;
		newNode.next = findedElement.next;
		findedElement.next = newNode;
		return newNode;
	}
	public insertBefore(comparator: (data: T) => boolean, data: T): Node<T> {
		const findedElement = this.search(comparator);
		if (!findedElement) {
			return this.insertInBegin(data);
		}
		const newNode = new Node(data);
		newNode.next = findedElement;
		newNode.prev = findedElement.prev;
		findedElement.prev = newNode;
		return newNode;
	}
}

const linked = new LinkedList<number>();

linked.insertInBegin(1);
linked.insertInBegin(2);
linked.insertInBegin(3);
linked.insertInBegin(4);
linked.insertInBegin(5);

console.log(linked.insertBefore(element => element == 3, 888));
console.log(linked.traverse());

import { Node } from "./Nodo.js";

export class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        if (this.head !== null) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    bubbleSort(compareFunction) {
        let swapped;
        do {
            swapped = false;
            let current = this.head;
            while (current && current.next) {
                if (compareFunction(current.data, current.next.data) > 0) {
                    const temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);
    }

    forEach(callback) {
        let current = this.head;
        while (current !== null) {
            callback(current.data);
            current = current.next;
        }
    }
}
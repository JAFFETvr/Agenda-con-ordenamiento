class DoublyLinkedList {
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

    printList() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log('Lista enlazada doble: ' + result);
    }

    printReverseList() {
        let current = this.head;
        let result = '';
        while (current.next !== null) {
            current = current.next;
        }
        while (current !== null) {
            result += current.data + ' ';
            current = current.prev;
        }
        console.log('Lista enlazada doble en reversa: ' + result);
    }
}

const myList = new DoublyLinkedList(); // Crear una lista enlazada doble


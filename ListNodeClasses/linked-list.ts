class ListNode<T> {
  next?: ListNode<T>;

  constructor(public value: T){}

}

class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0; 

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root){
        this.root = node;
        this.tail = node;
    } else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
    this.length++;
 }

 insertAt(value: T, pos: number) {
    if (pos > -1 && pos < this.length && this.root) {
        let current = this.root;
        let index = 0;
        let previous = current;
        let node = new ListNode(value);

        if (pos == 0) {
            node.next = this.root;
            this.root = node;
        } else {
            while (index++ < pos && current.next) {
                previous = current;
                current = current.next;
            }
        }
    }
}

 removeAt(value: T, pos: number) {
    if (pos > -1 && pos < this.length && this.root) {
        let current = this.root;
        let previous: ListNode<T> = current;
        let index = 0;
        let node = new ListNode(value);

        if (pos === 0) {
            node.next = this.root;
            this.root = node;
        } else {
            while (index++ < pos && current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current;
    } else {
        return null;
    }
  }


 getNumberOfElements() {
    return this.length;

 }
 print() {
    let current = this.root;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
  }
}
const list = new LinkedList<number>();

list.add(1);
list.add(2);
list.add(3);

const nameList = new LinkedList<string>();
list.print();


public class Test {
  public static void main(String[] args) {
    SinglyLinkedList list = new SinglyLinkedList();
    list.addNodeToEnd(4);
    System.out.println(list.countNodes());
    System.out.println(list.removeNodeFromFront());
    System.out.println(list.countNodes());
    list.addNodeToEnd(5);
    list.addNodeToFront(1);
    list.listElements();
    System.out.println(list.countNodes());
    System.out.println(list.removeNodeFromEnd());
    list.addNodeToEnd(7);
    System.out.println(list.countNodes());
    System.out.println(list.removeNodeFromEnd());
  }
}

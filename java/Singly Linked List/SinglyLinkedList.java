public class SinglyLinkedList {
  private Node head;

  public SinglyLinkedList()
  {
    head = null;
  }

  public void addNodeToEnd(Integer newVal) {
    //Create New Node
    Node newNode = new Node(newVal);

    //Add node to list

    //Check if list has any elements
    if(head == null) {
      head = newNode;
    }
    else {
      Node currNode = head;
      if (currNode.getNext() == null) {
        currNode.setNext(newNode);
      }
      else {
        while (currNode.getNext() != null) {
          currNode = currNode.getNext();
        }
        currNode.setNext(newNode);
      }
    }
  }

  public void addNodeToFront(Integer newVal) {
    //Create Node
    Node newNode = new Node(newVal);

    newNode.setNext(head);

    head = newNode;
  }

  public Integer removeNodeFromEnd()
  {
    Node currNode = head;
    Node toRemove;
    if (head == null) {
      return null;
    }
    else if (head.getNext() == null) {
      toRemove = head;
      head = null;
    }
    else {
      while (currNode.getNext().getNext() != null) {
        currNode = currNode.getNext();
      }
      toRemove = currNode.getNext();
      currNode.setNext(null);
    }
    return toRemove.getData();

  }

  public Integer removeNodeFromFront()
  {
    Node toRemove = head;
    head = head.getNext();
    return toRemove.getData();
  }

  public Integer countNodes()
  {
    if (head == null) {
      return 0;
    }
    else {
      Integer count = 1;
      Node currNode = head;
      while (currNode.getNext() != null) {
        count++;
        currNode = currNode.getNext();
      }
      return count;
    }
  }

  public void listElements()
  {
    Node currNode = head;
    while(currNode != null) {
      System.out.print(currNode.getData());
      currNode = currNode.getNext();
    }
  }
}

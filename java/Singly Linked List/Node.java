public class Node {
  private Integer data;
  private Node next;

  public Node() { //Default constructor
    data = null;
    next = null;
  }

  public Node(Integer data) {
    this.data = data;
    next = null;
  }

  //Getters and Setters
  //Data
  public Integer getData() {
    return this.data;
  }

  public void setData(Integer data) {
    this.data = data;
  }

  //Next
  public Node getNext() {
    return this.next;
  }
  public void setNext(Node newNode) {
    this.next = newNode;
  }
}

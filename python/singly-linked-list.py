class Node:
    def __init__(self):
        """ Class Constructor """
        self.data = None
        self.nextNode = None

class SinglyLinkedList:
    """ Class Constructor """
    def __init__(self):
        self.head = None

    def addNodeToEnd(self, newVal):
        """ Append A new node containing the speciefied value to the end of
        the list
        parameters: newVal - the value to be added"""
        #Create New Node
        newNode = Node()
        newNode.data = newVal

        #Check if the list is empty, if it is, add the element here
        if self.head is None:
            self.head = newNode
        else: #else iterate until the end of the list
            currNode = self.head
            while currNode.nextNode is not None:
                currNode = currNode.nextNode
            currNode.nextNode = newNode

    def addNodeToFront(self, newVal):
        newNode = Node()
        newNode.data = newVal
        newNode.nextNode =  self.head
        self.head = newNode



    def listElements(self):
        """ Print the elements in the list """
        currNode = self.head
        while currNode is not None:
            print(currNode.data)
            currNode = currNode.nextNode

    def removeNodeFromEnd(self):
        """ Remove node from the end of the list"""
        if self.head is None:
            return
        elif self.head.nextNode is None:
            removedNode = self.head
            self.head = None
        else: #else iterate until the end of the list
            currNode = self.head
            while currNode.nextNode.nextNode is not None:
                currNode = currNode.nextNode
            removedNode = currNode.nextNode
            currNode.nextNode = None
            return removedNode


    def removeNodeFromFront(self):
        if self.head is None:
            return
        else:
            nextNode, removedNode = self.head.nextNode, self.head
            self.head = nextNode
            return removedNode

    def countNodes(self):
        if self.head is None:
            return 0
        else:
            count = 1
            currNode = self.head
            while  currNode.nextNode is not None:
                count = count + 1
                currNode = currNode.nextNode
            return count


def testScript():
    test = SinglyLinkedList()
    test.addNodeToEnd(4)
    print(test.countNodes())
    print(test.removeNodeFromFront().data)
    print(test.countNodes())
    test.addNodeToEnd(5)
    test.addNodeToFront(1)
    test.addNodeToFront(7)
    print(test.countNodes())
    print(test.removeNodeFromEnd().data)
    test.listElements()

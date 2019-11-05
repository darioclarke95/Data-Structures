function LinkedList() {

  function Node(data) {
    var data = data;
    var next = null;

    return {
      get value() {
        return data;
      },

      set value(value) {
        data = value;
      },

      get nextNode() {
        return next;
      },

      set nextNode(node) {
        next = node;
      }
    }
  }
  var head = null;
  var size = 0;

  return {
    get length() {
      return size;
    },

    get elements() {
      var ret = [];
      var cur = head;
      if (cur === null) {
        return ret;
      } else {
        ret.push(cur.value);
        while (cur.nextNode !== null) {
          ret.push(cur.nextNode.value);
          cur = cur.nextNode;
        }
      }
      return ret;
    },

    *[Symbol.iterator]() {
      var cur = head;

      if (cur !== null) {
        yield cur.value
        while (cur.nextNode !== null) {
          yield cur.nextNode.value;
          cur = cur.nextNode;
        }
      }
    },
    //Add a new value to the end /of the list
    append(newValue) {
      var node = new Node(newValue);
      //if the list is empty set the head to the newly created Node
      if (size == 0) {
        head = node;
      } else {
        //if the list already contains elements traverse and add the new node at the end
        var cur = head;
        while (cur.nextNode !== null) {
          cur = cur.nextNode;
        }
        cur.nextNode = node;
      }
      size++;
    },

    //Insert a new value at the specefied index
    insertAt(newValue, index) {
      var node = new Node(newValue);
      //making sure the index is valid
      if (!isNaN(index)) {
        if (index >= 0 && index < size) {
          if (index == 0) {
            node.nextNode = head;
            head = node;
          } else {
            var pos = 0;
            var prev = null;
            var cur = head;

            while (pos < index) {
              pos++;
              prev = cur;
              cur = cur.nextNode;
            }
            node.nextNode = cur;
            prev = node;
          }
          size++;
        }
      }
    },

    prepend(newValue) {
      var node = new Node(newValue);
      node.nextNode = head;
      head = node;
      size++;
    },

    addArray(array) {
      if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
             this.append(array[i]);
        }
      }
    },

    contains(value) {
      var cur = head;
      while (cur !== null) {
        if (cur.value == value) {
          return true;
        }
        cur = cur.nextNode;
      }
      return false;
    },

    get first() {
      if (head === null) {
        return head;
      }
      return head.value;
    },

    get last() {
      var cur = head;
      if (cur === null) {
        return cur;
      }
      while (cur.nextNode !== null) {
        cur = cur.nextNode;
      }
      return cur.value;
    },

    indexOf(value) {
      if (head === null) {
        return null;
      }
      var cur = head;
      var index = 0;
      while (cur !== null) {
        if (cur.value == value) {
          return index;
        }
        index++;
        cur = cur.nextNode;
      }
    },

    get(index) {
      if (head === null) {
        return null;
      }
      if (index < 0 || index > size - 1) {
        return null;
      }
      var cur = head;
      var pos = 0;
      while (pos < index) {
        cur = cur.nextNode;
        pos++;
      }
      return cur.value;
    },

    remove(index) {
      if (head === null) {
        return;
      }
      if (index < 0 || index > size - 1) {
        return;
      }
      var cur = head;
      var prev = null;
      var pos = 0;
      while (pos < index) {
        prev = cur;
        cur = cur.nextNode
        pos++;
      }
      var toGo = cur;
      if (prev === null) {
        head = toGo.nextNode
      } else {
        prev.nextNode = toGo.nextNode;
      }
      size--;
    },
    
    swap(index1, index2) {
      //If there are no elements or only 1 we can't swap anything     
      if (size < 2) {
        return;
      }
      
      //Invalid indices
      if(isNaN(index1) || isNaN(index2)){
        return;
      }
      
      if(index1 < 0 || index1 > size -1 || index2 < 0 || index2 > size-1) {
        return;
      }
      
      //If you've given me the same index twice
      if(index1 == index2) {
        return;
      }
      
      var prev1 = null;
      var prev2 = null;
      var toSwap1 = null;
      var toSwap2 = null;
      
      //Find the nodes
      
      //Finding node at index 1
      var pos = 0;
      toSwap1 = head;
      
      while (pos < index1) {
        prev1 = toSwap1;
        toSwap1 = toSwap1.nextNode;
        pos++
      }
      
      //Finding node at index 2
      pos = 0;
      toSwap2 = head;
      
      while(pos < index2) {
        prev2 = toSwap2;
        toSwap2 = toSwap2.nextNode;
        pos++;
      }
      
      //Swap
      //make previous point to the other node 
      //make node point to what the other was pointing to
      if(prev1 === null) { //The first node to be swapped is the head
        head = toSwap2;
        prev2.nextNode = toSwap1;
      } else if (prev2 === null){ //The second node to be swapped is the head
        prev1.nextNode = toSwap2;
        head = toSwap1
      } else {
        prev1.nextNode = toSwap2;
        prev2.nextNode = toSwap1;
      }
      var temp = toSwap2.nextNode;
      toSwap2.nextNode = toSwap1.nextNode;
      toSwap1.nextNode = temp;
    },
    
    empty() {
      head = null;
      size = 0;
    },
    
    fromArray(array) {
      this.empty();
      this.addArray(array);
    }
  }; //End of Object being returned

}

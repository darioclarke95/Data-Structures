
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
      if(cur === null) {
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

      if(cur!==null) {
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
      if(size == 0) {
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
      var node = new Node(value);

      //making sure the index is valid
      if(!isNaN(index)) {
        if(index >=0 && index < size) {
          if(index == 0) {
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
            node.nextNode = cur
            prev = node;
          }
          size++;
        }
      }

    }
  };


}
 export { LinkedList };

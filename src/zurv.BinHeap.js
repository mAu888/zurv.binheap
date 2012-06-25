(function(window, document, zurv, undefined) {

  var BinHeap = function() {
    var _heap = [],
        _compareFunctionStack = [];

    /** INTERNAL FUNCTIONS **/
    var _compare = function(h, indexA, indexB) {
      return h[indexB] - h[indexA];
    };

    var _swap = function(h, indexA, indexB) {
      var tmpObj = h[indexA];

      h[indexA] = h[indexB];
      h[indexB] = tmpObj;

      return h;
    };

    _left = function (index) {
      return 2 * index + 1;
    };

    _right = function (index) {
      return 2 * index + 2;
    };

    _parent = function (index) {
      return Math.floor((index - 1) / 2);
    };

    var _siftDown = function(h, index) {
      var i = index;
      do {
        var x = i;
        if (_left(i) < h.length && _compare(h, _left(i), x) > 0) {
          x = _left(i);
        }
        
        if (_right(i) < h.length && _compare(h, _right(i), x) > 0) {
          x = _right(i);
        }

        if (x === i) {
          break;
        }

        _swap(h, i, x);
        i = x;
      } while (true);
    };

    var _bubbleUp = function(h, index) {
      while (index > 0 && _compare(h, index, _parent(index)) > 0) {
        _swap(h, index, _parent(index));
        index = _parent(index);
      }
    };

    var self = {

      insert: function(obj) {
        _heap.push(obj);

        // Do we need to restore the heap condition?
        if (self.count() > 1) {
          _bubbleUp(_heap, self.count() - 1);
        }
      },

      pop: function() {
        if (self.count() < 1) {
          return undefined;
        }

        var obj = _heap[0];

        // Swap last element to first
        _heap[0] = _heap[self.count() - 1];

        // Remove last unused
        _heap.pop();

        // Rebuild heap
        _siftDown(_heap, 0);

        return obj;
      },

      refresh: function(obj) {
        var index = _heap.indexOf(obj);

        _bubbleUp(_heap, index);
      },

      count: function() {
        return _heap.length;
      },

      compare: function() {
        var args = arguments;

        if (args.length > 0 && typeof args[0] === "function") {
          _compareFunctionStack.push(_compare);

          _compare = args[0];
        }
        else if(args.length < 1) {
          _compare = _compareFunctionStack.pop();
        }
      }

    };

    return self;

  };

  zurv.BinHeap = BinHeap;
  window.zurv = zurv;

})(window, document, (window.zurv || {}));
# zurv.binheap

`zurv.binheap` is my implementation of a [binary heap](http://en.wikipedia.org/wiki/Binary_heap).

# Usage

To create a simple heap, do

    var heap = zurv.BinHeap();

    heap.push(7);
    heap.push(3);
    heap.push(21);
    heap.push(17);

    alert(heap.pop()); // 3
    alert(heap.pop()); // 7
    alert(heap.pop()); // 17
    alert(heap.pop()); // 21

When using the heap with more complex types, you have to provide a custom compare function. See the following example

    var heap = zurv.BinHeap();

    heap.compare(function(heap, indexA, indexB)) {
      return heap[indexB].value - heap[indexA].value;
    };

    heap.push({ text: "foo", value: 71});
    heap.push({ text: "bar", value: 6});
    heap.push({ text: "baz", value: 43});
    heap.push({ text: "doo", value: 17});
    heap.push({ text: "noo", value: 5});

    alert(heap.pop().text); // noo
    alert(heap.pop().text); // bar
    alert(heap.pop().text); // doo
    alert(heap.pop().text); // baz
    alert(heap.pop().text); // foo

The compare function has to return a value greater than `0` when the value of the object at `indexB` is bigger of that at `indexA`. If they are the same, return `0`, else return a value less than zero.

# More ...

Any comments, bug reports or tipps very much apprechiated.
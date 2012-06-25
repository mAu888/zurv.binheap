describe("zurv.BinHeap.js", function() {

  var heap = null,
      zurv = window.zurv;

  beforeEach(function() {
    heap = zurv.BinHeap();
  });

  it("should push elements", function() {
    heap.insert(3);
    heap.insert(1);
    heap.insert(9);
    heap.insert(11);

    expect(heap.count()).toEqual(4);
  });

  it("should not have elements on new heap", function() {

    expect(heap.count()).toEqual(0);

  });

  it("should pop elements in ascending order", function() {

    heap.insert(3);
    heap.insert(1);
    heap.insert(9);
    heap.insert(11);

    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(3);
    expect(heap.pop()).toEqual(9);
    expect(heap.pop()).toEqual(11);

  });

  it("should pop elements in correct order after popping and inserting again", function() {

    heap.insert(3);
    heap.insert(1);
    heap.insert(71);

    expect(heap.pop()).toEqual(1);

    heap.insert(2);

    expect(heap.pop()).toEqual(2);

  });

  it("should pop elements with a custom compare function provided", function() {

    var el1 = { data: "foo", value: 1 },
        el2 = { data: "foo", value: 76 },
        el3 = { data: "foo", value: 3 },
        el4 = { data: "foo", value: 19 },
        el5 = { data: "foo", value: 27 },
        el6 = { data: "foo", value: 6 },
        el7 = { data: "foo", value: 53 };

    heap.compare(function(h, a, b) {
      console.log("h[a].value: " + h[a].value + ", h[b].value: " + h[b].value + "; " + (h[b].value - h[a].value));
      return h[b].value - h[a].value;
    });

    heap.insert(el1);
    heap.insert(el2);
    heap.insert(el3);
    heap.insert(el4);
    heap.insert(el5);
    heap.insert(el6);
    heap.insert(el7);

    expect(heap.pop()).toEqual(el1);
    expect(heap.pop()).toEqual(el3);
    expect(heap.pop()).toEqual(el6);
    expect(heap.pop()).toEqual(el4);
    expect(heap.pop()).toEqual(el5);
    expect(heap.pop()).toEqual(el7);
    expect(heap.pop()).toEqual(el2);

  });

  it("should pop elements with a custom compare function provided in correct order when decreased key", function() {

    var el1 = { data: "foo", value: 1 },
        el2 = { data: "foo", value: 76 },
        el3 = { data: "foo", value: 3 },
        el4 = { data: "foo", value: 19 },
        el5 = { data: "foo", value: 27 },
        el6 = { data: "foo", value: 6 },
        el7 = { data: "foo", value: 53 };

    heap.compare(function(h, a, b) {
      console.log("h[a].value: " + h[a].value + ", h[b].value: " + h[b].value + "; " + (h[b].value - h[a].value));
      return h[b].value - h[a].value;
    });

    heap.insert(el1);
    heap.insert(el2);
    heap.insert(el3);
    heap.insert(el4);
    heap.insert(el5);
    heap.insert(el6);
    heap.insert(el7);

    el2.value = 7;

    heap.refresh(el2);

    expect(heap.pop()).toEqual(el1);
    expect(heap.pop()).toEqual(el3);
    expect(heap.pop()).toEqual(el6);
    expect(heap.pop()).toEqual(el2);
    expect(heap.pop()).toEqual(el4);
    expect(heap.pop()).toEqual(el5);
    expect(heap.pop()).toEqual(el7);

  });

});
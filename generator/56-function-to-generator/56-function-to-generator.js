// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a function to a generator', () => {

  it('the generator can receive a function as a value', function() {
    let fn = function() {};
    function* generatorFunction() {
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next();
    iterator.next(fn);
  });

  it('pass a function to the iterator, which calls it', function() {
    let fn = () => 2;
    function* generatorFunction() {
      yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(fn).value];
    assert.deepEqual([1, 2], iteratedOver);
  });

  it('nesting yielded function calls', function() {
    let fn = () => 2;
    function* generatorFunction() {
      yield (yield (yield 1)());
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(fn).value,iterator.next(3).value];
    assert.deepEqual([1, 2, 3], iteratedOver);
  });

});

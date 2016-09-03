# ES6 - KATAS - (my solutions) 

## Description 
All these Katas exercises are taken from the site [es6katas](http://es6katas.org/)

You can try these solutions directly from tdbin [tddbin](http://tddbin.com/) simply copy the following solutions and "run tests"

## List of katas

- [1: template strings - basic](https://github.com/nothnk/es6katas/blob/master/template-strings/1-basic/1-template-strings-basic-resolved.js)
- [2: template strings - multiline](https://github.com/nothnk/es6katas/blob/master/template-strings/2-multiline/2-template-strings-multiline.js)
- [3: template strings - tagged](https://github.com/nothnk/es6katas/blob/master/template-strings/3-tagged/3-template-strings-tagged.js)
- [4: template strings - String.raw](https://github.com/nothnk/es6katas/blob/master/template-strings/4-string-raw/4-template-strings-String.raw.js)
- [5: arrow functions - basics](https://github.com/nothnk/es6katas/blob/master/arrow-functions/5-basic/5-arrow-functions-basics.js)
- [6: arrow functions - binding](https://github.com/nothnk/es6katas/blob/master/arrow-functions/6-binding/6-arrow-functions-binding.js)
- [7: block scope - let](https://github.com/nothnk/es6katas/blob/master/block-scope/7-let/7-block-scope-let.js)
- [8: block scope - const](https://github.com/nothnk/es6katas/blob/master/block-scope/8-const/8-block-scope-const.js)
- [9: object-literals - basics](https://github.com/nothnk/es6katas/blob/master/object-literals/9-basics/9-object-literals-basics.js)
- [10: destructuring - array](https://github.com/nothnk/es6katas/blob/master/destructuring/10-array/10-destructuring-array.js)
- [11: destructuring - string](https://github.com/nothnk/es6katas/blob/master/destructuring/11-string/11-destructuring-string.js)
- [12: destructuring - object](https://github.com/nothnk/es6katas/blob/master/destructuring/12-object/12-destructuring-object.js)
- [13: destructuring - defaults](https://github.com/nothnk/es6katas/blob/master/destructuring/13-defaults/13-destructuring-defaults.js)
- [14: destructuring - parameters](https://github.com/nothnk/es6katas/blob/master/destructuring/14-parameters/14-destructuring-parameters.js)
- [15: destructuring - assign](https://github.com/nothnk/es6katas/blob/master/destructuring/15-assign/15-destructuring-assign.js)
- [16: object-literals - computed properties](https://github.com/nothnk/es6katas/blob/master/object-literals/16-computed-properties/16-object-literal-computed-properties.js)
- [17: unicode - in strings](https://github.com/nothnk/es6katas/blob/master/unicode/17-in-strings/17-unicode-in-strings.js)
- [18: rest - as-parameter](https://github.com/nothnk/es6katas/blob/master/rest/18-as-parameter/18-rest-as-parameter.js)
- [19: rest - with-destructuring](https://github.com/nothnk/es6katas/blob/master/rest/19-with-destructuring/19-rest-with-destructuring.js)
- [20: spread - with-arrays](https://github.com/nothnk/es6katas/blob/master/spread/20-with-arrays/20-spread-with-arrays.js)
- [21: spread - with-strings](https://github.com/nothnk/es6katas/blob/master/spread/21-with-strings/21-spread-with-string.js)
- [22: class - creation](https://github.com/nothnk/es6katas/blob/master/class/22-creation/22-class-creation.js)
- [23: class - accessors](https://github.com/nothnk/es6katas/blob/master/class/23-accessors/23-class-accessors.js)
- [24: class - static keyword](https://github.com/nothnk/es6katas/blob/master/class/24-static-keyword/24-class-static-keyword.js)
- [25: class - extends](#25-class---extends-)
- [26: class - more-extends](#26-class---more-extends-)
- [27: class - super inside a method](#27-class---super-inside-a-method-)
- [28: class - super in constructor](#28-class---super-in-constructor-)
- [29: array - `Array.from` static method](#29-array---Arrayfrom-static-method-)
- [30: array - `Array.of` static method](#30-array---Array-of--static method-)


## 25: class - extends [🔝](#list-of-katas)
```javascript
// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('classes can inherit from another', () => {

  describe('the default super class is Object', () => {
  
    it('class A is an instance of Object', () => {
      class A {}
      
      assert.equal(new A() instanceof Object, true);
    });
  
    it('B extends A, B is also instance of Object', () => {
      class A {}
      class B extends A {}
      
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
    
    it('class can extend `null`, not an instance of Object', () => {
      class NullClass extends null {}
      
      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
    
  });
  
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      class A{}
      class B extends A {}
      
      assert.equal(new B() instanceof A, true);
    });
    
    it('extend over multiple levels', () => {
      class A {}
      class B extends A {}
      class C extends B {}
      
      let instance = new C();
      assert.equal(instance instanceof A, true);
    });
  });
});

```

## 26: class - more-extends [🔝](#list-of-katas)
```javascript
// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('class can inherit from another', () => {

  it('extend an `old style` "class", a function, still works', () => {
    let A = function(){};
    class B extends A {}
    
    assert.equal(new B() instanceof A, true);
  });
  
  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it('A is the prototype of B', () => {
      const isIt = A.isPrototypeOf(B);
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
      const proto = B.prototype;
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it('eg the inline assignment of the parent class', () => {
      let A;
      class B extends (A = class {}) {}
      
      assert.equal(new B() instanceof A, true);
    });
    
    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent(true)) {}
      
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
  
});

```

## 27: class - super inside a method [🔝](#list-of-katas)
```javascript
// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!

describe('inside a class use `super` to access parent methods', () => {

  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class A { 
      hasSuper() { return false; } // we can`t use super without extends
    }
    
    assert.equal(new A().hasSuper(), false);
  });
  
  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper(); }}
    
    assert.equal(new B().hasSuper(), true);
  });
  
  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return undefined; }}
    
    assert.equal(new B().hasSuper(), void 0);
  });
  
  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return this.youAreSuper; }}
    class B extends A {constructor() { super(); this.youAreSuper = true; } }
    class C extends B {
      iAmSuper() { 
        return this.youAreSuper; 
      }
    }
    
    assert.equal(new C().iAmSuper(), true);
  });
  
  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    class B extends A {getMethod() { return super.hasSuper; }}
    
    assert.equal(new B().getMethod(), void 0);
  });
  
});
```

## 28: class - super in constructor [🔝](#list-of-katas)
```javascript
// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!

describe('class', () => {

  it('if you `extend` a class, use `super()` to call the parent constructor', () => {
    class A {constructor() { this.levels = 1; }}
    class B extends A {
      constructor() {
        super();
        this.levels++; 
      }
    }
    
    assert.equal(new B().levels, 2);
  });

  it('`super()` may also take params', () => {
    class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
    class B extends A {
      constructor(...args) { 
        super(...args);
        this.counter++; 
      }
    }
    
    assert.equal(new B(42, 2).counter, 45);
  });
  
  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      inc() { 
        this.countUp = 2; 
        super.inc();
        return this.countUp;
      }
    }
    
    assert.equal(new B().inc(), 1);
  });

  it('use `super.constructor` to find out if there is a parent constructor', () => {
    class A extends null {
      constructor() {
        super();
        this.isTop = !super.constructor;
      }
    }

    assert.equal(new A().isTop, false);
  });
  
});

```
## 29: array - `Array.from` static method [🔝](#list-of-katas)
```javascript
// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.from` converts an array-like object or list into an Array', () => {

  const arrayLike = {0: 'one', 1: 'two', length: 2};
  
  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike);
    
    assert.deepEqual(arr, ['one', 'two']);
  });
  
  it('a DOM node`s classList object can be converted', function() {
    document.body.classList.add('some');
    document.body.classList.add('other');
    const classList = Array.from(document.body.classList);

    assert.equal(''+classList, ''+['some', 'other']);
  });
  
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList =document.querySelectorAll('body');
    const bodies =  Array.from(nodeList).filter((node) => node === document.body);
    
    assert.deepEqual(bodies, [document.body]);
  });
  
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value,key) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
  
});
```
## 30: array - `Array.of` static method [🔝](#list-of-katas)
```javascript
// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.of(10);
    
    assert.deepEqual(arr, [10]);
  });
  
  it('puts all arguments into array elements', () => {
    const arr = Array.of(1,2);
    
    assert.deepEqual(arr, [1, 2]);
  });
  
  it('takes any kind and number of arguments', () => {
    const starter = [1, 2];
    const end = [3, '4'];
    const arr = Array.of([...starter], ...end);
    
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
  
});

```
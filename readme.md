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
- [9: object-literals - basics](#9-object-literals---basics-)
- [10: destructuring - array](#10-destructuring---array-)
- [11: destructuring - string](#11-destructuring---string-)
- [12: destructuring - object](#12-destructuring---object-)
- [13: destructuring - defaults](#13-destructuring---defaults-)
- [14: destructuring - parameters](#14-destructuring---parameters-)
- [15: destructuring - assign](#15-destructuring---assign-)
- [16: object-literal - computed properties](#16-object-literal---computed-properties-)
- [17: unicode - in strings](#17-unicode---in-strings-)
- [18: rest - as-parameter](#18-rest---as-parameter-)
- [19: rest - with-destructuring](#19-rest---with-destructuring-)
- [20: spread - with-arrays](#20-spread---with-arrays-)
- [21: spread - with-strings](#21-spread---with-strings-)
- [22: class - creation](#22-class---creation-)
- [23: class - accessors](#23-class---accessors-)
- [24: class - static keyword](#24-class---static-keyword-)
- [25: class - extends](#25-class---extends-)
- [26: class - more-extends](#26-class---more-extends-)
- [27: class - super inside a method](#27-class---super-inside-a-method-)
- [28: class - super in constructor](#28-class---super-in-constructor-)
- [29: array - `Array.from` static method](#29-array---Arrayfrom-static-method-)
- [30: array - `Array.of` static method](#30-array---Array-of--static method-)

## 9: object-literals - basics [🔝](#list-of-katas)
```javascript
// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('The object literal allows for new shorthands', () => {

  const x = 1;
  const y = 2;

  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      const short = {y};
      assert.deepEqual(short, {y: y});
    });
    it('works with multiple variables too', () => {
      const short = {x, y};
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  
  describe('with methods', () => {
    
    const func = () => func;

    it('using the name only uses it as key', () => {
      const short = {func};
      assert.deepEqual(short, {func: func});
    });
    
    it('a different key must be given explicitly, just like before ES6', () => {
      const short = {otherKey: func};
      assert.deepEqual(short, {otherKey: func});
    });
    
    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {
        inlineFunc(){
          return 'I am inline';
        }
      };
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
  
});
```
## 10: destructuring - array [🔝](#list-of-katas)
```javascript
// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring arrays makes shorter code', () => {

  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });

  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [y, x] = [x, y];
    assert.deepEqual([x, y], ['why', 'ax']);
  });
  
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [,,z] = all;
    assert.equal(z, 'zet');
  });
  
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user;
    
    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });

  it('chained assignments', () => {
    let c, d;
    let [a, b] = [c, d] = [1, 2];
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });

  it('in for-of loop', () => {
    for (var [,a, b] of [[0, 1, 2]]) {}
    assert.deepEqual([a, b], [1, 2]);
  });

});
```

## 11: destructuring - string [🔝](#list-of-katas)
````javascript
// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring also works on strings', () => {

  
  it('destructure every character', () => {
    let [a, b, c] = 'abc';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  
  it('missing characters are undefined', () => {
    const [a, c] = 'a';
    assert.equal(c, void 0);
  });
  
  it('unicode character work too', () => {
    const [space, coffee] = 'a☕';
    assert.equal(coffee, '\u{2615}');
  });
  
});
````

## 12: destructuring - object [🔝](#list-of-katas)
```javascript
// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring objects', () => {

  it('is simple', () => {
    const {x} = {x: 1};
    assert.equal(x, 1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: {second}} = {magic};
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });
  
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2};
      assert.equal(z, void 0);
    });
  
    it('destructure from builtins (string)', () => {
      const {substr} = '1';
      assert.equal(substr, String.prototype.substr);
    });
  });

});
```

## 13: destructuring - defaults [🔝](#list-of-katas)
```javascript
// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring can also have default values', () => {

  it('for an empty array', () => {
    const [a=1] = [];
    assert.equal(a, 1);
  });

  it('for a missing value', () => {
    const [a,b=2,c] = [1,,3];
    assert.equal(b, 2);
  });

  it('in an object', () => {
    const {a, b=2} = {a: 1};
    assert.equal(b, 2);
  });

  it('if the value is undefined', () => {
    const {a, b=2} = {a: 1, b: void 0};
    assert.strictEqual(b, 2);
  });

  it('also a string works with defaults', () => {
    const [a,b=2] = '1';
    assert.equal(a, '1');
    assert.equal(b, 2);
  });

});
```

## 14: destructuring - parameters [🔝](#list-of-katas)
```javascript
// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring function parameters', () => {

  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      const fn = ({id,name}) => {
        assert.equal(id, 42);
        assert.equal(name, 'Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });
    
    it('multiple params from array/object', () => {
      const fn = ([,{name}]) => {
        assert.equal(name, 'Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });

  describe('default values', () => {
    it('for simple values', () => {
      const fn = (id, name='Bob') => {
        assert.strictEqual(id, 23);
        assert.strictEqual(name, 'Bob');
      };
      fn(23);
    });
    
    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
      const fn = ([user = {id: 23, name: 'Joe'}] ) => {
        assert.deepEqual(user, defaultUser);
      };
      fn([]);
    });
    
    it('mix of parameter types', () => {
      const fn = (id = 1, [arr = 2], {obj = 3} ) => {
        assert.equal(id, 1);
        assert.equal(arr, 2);
        assert.equal(obj, 3);
      };
      fn(void 0, [], {});
    });
  });

});
```
## 15: destructuring - assign [🔝](#list-of-katas)
```javascript
// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!

describe('assign object property values to new variables while destructuring', () => {

  describe('for simple objects', function() {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const {x: y} = {x: 1};
      assert.equal(y, 1);
    });
    
    it('assign a new name and give it a default value using `= <default value>`', () => {
      const {x: y=42} = {y: 23};
      assert.equal(y, 42);
    });
  });

  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({x: y}) => {
        assert.equal(y, 1);
      };
      fn({x: 1});
    });
    
    it('giving it a default value is possible too, like above', () => {
      const fn = ({x: y=3}) => {
        assert.equal(y, 3);
      };
      fn({});
    });
  });
  
});
```
## 16: object-literal - computed properties [🔝](#list-of-katas)
```javascript
// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('Object literal properties may be computed values', () => {

  it('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 1};
    assert.equal(obj.x, 1);
  });

  it('can also get a function assigned', () => {
    const key = 'func';
    const obj = {[key]() { return 'seven'}};
    assert.equal(obj.func(), 'seven');
  });

  it('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    const obj = {[[getName()]]() {return 'seven'}};
    assert.equal(obj.propertyName(), 'seven');
  });

  it('the key can also be constructed by an expression', () => {
    const what = 'Name';
    const obj = {['property' + what]: null};
    assert.equal('propertyName' in obj, true);
  });

  it('accessor keys can be computed names too', () => {
    const obj = {
      get ['key']() {return 1}
    };
    assert.equal(obj.key, 1);
  });
});
``` 
## 17: unicode - in strings [🔝](#list-of-katas)
```javascript
// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!

describe('unicode strings', () => {

  it('are \\u prefixed', () => {
    const nuclear = '\u2622';
    assert.equal(nuclear, '☢');
  });

  it('value is 4 bytes/digits', () => {
    const nuclear = '\u2622';
    assert.equal(`no more ${nuclear}`, 'no more ☢');
  });

  it('value is hexadecimal', () => {
    const nuclear = `\u006E\u006F more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  });

  it('curly braces may surround the value', () => {
    const nuclear = `\u{006E}\u{006F} more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  });

});
```

## 18: rest - as-parameter [🔝](#list-of-katas)
```javascript
// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest in function params', () => {
    
  it('must be the last parameter', () => {
    const fn = (...rest) => {
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });
  
  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, ...rest) => {
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });
  
  it('makes `arguments` obsolete', () => {
    const fn = (...args) => {
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });
    
  it('eliminate `arguments`!!!', () => {
    const fn = (...args) => args;
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual([2, 3], rest);
  });
    
});
```

## 19: rest - with-destructuring [🔝](#list-of-katas)
```javascript
// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest with destructuring', () => {
    
  it('rest parameter must be last', () => {
    const [...all] = [1, 2, 3, 4];
    assert.deepEqual(all, [1, 2, 3, 4]);
  });
  
  it('assign rest of an array to a variable', () => {
    const [x,...all] = [1, 2, 3, 4];
    assert.deepEqual(all, [2, 3, 4]);
  });
  
  // the following are actually using `spread` ... oops, to be fixed
  it('concat differently', () => {
    const theEnd = [3, 4];
    const allInOne = [1, 2, ...theEnd];
    assert.deepEqual(allInOne, [1, 2, 3, 4]);
  });
  
  it('`apply` made simple, even for constructors', () => {
    const theDate = [2015, 1, 1];
    const date = new Date(...theDate);
    assert.deepEqual(new Date(2015, 1, 1), date);
  });
  
});

```

## 20: spread - with-arrays [🔝](#list-of-katas)
```javascript
// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!

describe('spread with arrays', () => {

  it('extracts each array item', function() {
    const [a, b] = [...[1, 2]];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

  it('in combination with rest', function() {
    const [x, a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    assert.equal(a, 1);
    assert.equal(b, 2);
    assert.deepEqual(rest, [3, 4, 5]);
  });

  it('spreading into the rest', function() {
    const [x,...rest] = [...[,1, 2, 3, 4, 5]];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', function() {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
        assert.deepEqual(magicNumbers[0], magicA);
        assert.deepEqual(magicNumbers[1], magicB);
      };
      fn(...magicNumbers);
    });
  
    it('pass an array of numbers to Math.max()', function() {
      const max = Math.max(...[23, 0, 42, 4]);
      assert.equal(max, 42);
    });
  });  
});

```

## 21: spread - with-strings [🔝](#list-of-katas)
```javascript
// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!

describe('spread with strings', () => {

  it('simply spread each char of a string', function() {
    const [a,b] = [...'ab'];
    assert.equal(a, 'a');
    assert.equal(b, 'b');
  });

  it('extracts each array item', function() {
    const [c,a,b] = ['a', ...'12'];
    assert.equal(a, 1);
    assert.equal(b, 2);
    assert.equal(c, 'a');
  });
  
  it('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', ...'bcd', 'e', 'f'];
    assert.equal(letters.length, 6);
  });
  
  it('dont confuse with the rest operator', function() {
    const [...rest] = [...'1234',...'5'];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });
  
  it('passed as function parameter', function() {
    const max = Math.max(...'12345');
    assert.deepEqual(max, 5);
  });
  
});

```

## 22: class - creation [🔝](#list-of-katas)
```javascript
// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    class TestClass {}
    
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  it('class is block scoped', () => {
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });
  
  it('special method is `constructor`', function() {
    class User {
      constructor(id) {
        this.id = id;
      }
    }
    
    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it('defining a method is simple', function() {
    class User {
      writesTests() {
        return false;
      }
    }
    
    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() { return !this.everWroteATest }
    }
    
    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it('anonymous class', () => {
    const classType = typeof class {};
    assert.equal(classType, 'function');
  });

});
```
## 23: class - accessors [🔝](#list-of-katas)
```javascript
// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!

describe('class accessors (getter and setter)', () => {

  it('only a getter is defined like a method prefixed with `get`', () => {
    class MyAccount {
      get balance() { return Infinity; }
    }
    
    assert.equal(new MyAccount().balance, Infinity);
  });

  it('a setter has the prefix `set`', () => {
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }
    
    const account = new MyAccount();
    account.balance = 23;
    assert.equal(account.balance, 23);
  });
  
  describe('dynamic accessors', () => {
    
    it('a dynamic getter name is enclosed in [ and ]', function() {
      const balance = 'yourMoney';
      class YourAccount {
        get [balance]() { return -Infinity; }
      }
      
      assert.equal(new YourAccount().yourMoney, -Infinity);
    });
    
    it('a dynamic setter name as well', function() {
      const propertyName = 'balance';
      class MyAccount {
        get [propertyName]() { return this.amount; }
        set [propertyName](amount) { this.amount = 23; }
      }
      
      const account = new MyAccount();
      account.balance = 42;
      assert.equal(account.balance, 23);
    });
  });
  
});
```

## 24: class - static keyword [🔝](#list-of-katas)
```javascript
// 24: class - static keyword
// To do: make all tests pass, leave the assert lines unchanged!

describe('inside a class you can use the `static` keyword', () => {

  describe('for methods', () => {
    
    class IntegrationTest {}
    class UnitTest {}
    
    it('a static method just has the prefix `static`', () => {
      class TestFactory {
        static makeTest() { return new UnitTest(); }
      }
      
      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });
  
    it('the method name can be dynamic/computed at runtime', () => {
      const methodName = 'createTest';
      class TestFactory {
        static [methodName]() { return new UnitTest(); }
      }
      
      assert.ok(TestFactory.createTest() instanceof UnitTest);
    });
  });
  
  describe('for accessors', () => {
    it('a getter name can be static, just prefix it with `static`', () => {
      class UnitTest {
        static get testType() { return 'unit'; }
      }
      
      assert.equal(UnitTest.testType, 'unit');
    });
    
    it('even a static getter name can be dynamic/computed at runtime', () => {
      const type = 'test' + 'Type';
      class IntegrationTest {
        static get [type]() { return 'integration'; }
      }
      
      assert.ok('testType' in IntegrationTest);
      assert.equal(IntegrationTest.testType, 'integration');
    });
  });
  
});
```

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
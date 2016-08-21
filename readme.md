# ES6 - KATAS - (my solutions) 

## Description 
All these Katas exercises are taken from the site [es6katas](http://es6katas.org/)

You can try these solutions directly from tdbin [tddbin](http://tddbin.com/) simply copy the following solutions and "run tests"

## List of katas

- [1: template strings - basic](#1-template-strings---basic-)
- [2: template strings - multiline](#2-template-strings---multiline-)
- [3: template strings - tagged](#3-template-strings---tagged-)
- [4: template strings - String.raw](#4-template-strings---String.raw-)
- [5: arrow functions - basics](#5-arrow-functions---basics-)
- [6: arrow functions - binding](#6-arrow-functions---binding-)
- [7: block scope - let](#7-block-scope---let-)
- [8: block scope - const](#8-block-scope---const-)
- [9: object-literals - basics](#9-object-literals---basics-)
- [10: destructuring - array](#10-destructuring---array-)
- [11: destructuring - string](#11-destructuring---string-)
- [12: destructuring - object](#12-destructuring---object-)
- [13: destructuring - defaults](#13-destructuring---defaults-)

## 1: template strings - basic [🔝](#list-of-katas)
```javascript
// 1: template strings - basics
// To do: make all tests pass, leave 	the asserts unchanged!

describe('a template string, is wrapped in ` (backticks) instead of \' or "', function() {

  describe('by default, behaves like a normal string', function() {
    
    it('just surrounded by backticks', function() {
      var str = `like a string`;
      assert.equal(str, 'like a string');
    });
    
  });

  var x = 42;
  var y = 23;
  
  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      var evaluated = `x=${x}`;
      assert.equal(evaluated, 'x=' + x);
    });
    
    it('multiple variables get evaluated too', function() {
      var evaluated = `${ x }+${ y }`;
      assert.equal(evaluated, x + '+' + y);
    });
    
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    
    it('all inside "${...}" gets evaluated', function() {
      var evaluated = `${ x + y }`;
      assert.equal(evaluated, x+y);
    });
    
    it('inside "${...}" can also be a function call', function() {
      function getDomain(){ 
        return document.domain; 
      }
      var evaluated = `${ getDomain() }`;
      assert.equal(evaluated, 'tddbin.com');
    });
    
  });
  
});
```
## 2: template strings - multiline [🔝](#list-of-katas)
```javascript
// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!

describe('template string, can contain multiline content', function() {

  it('a normal string can`t span across multiple lines', function() {
    var normalString = 'line1' + 
                        '\n' +
                       'line2';
    assert.equal(normalString, 'line1\nline2');
  });
  // Nota: cuidado con los espacios que nos dejan al hacer las multiples líneas sin comillas
  it('wrapped in backticks it can span over multiple lines', function() {
    var templateString = `line1
line2`;
    assert.equal(templateString, 'line1\nline2');
  });
  
  it('even over more than two lines', function() {
    var multiline = `line 1
                     line 2
                     line 3
                     `;
    assert.equal(multiline.split('\n').length, 4);
  });

  describe('and expressions inside work too', function() {
    
    var x = 42;
    
    it('like simple variables', function() {
      var multiline = `line 1
          ${x}`;
      assert.equal(multiline, 'line 1\n          42');
    });
    
    it('also here spaces matter', function() {
      var multiline = `
${x}`;
      assert.equal(multiline, '\n42');
    });
    
  });
  
});
```

## 3: template strings - tagged [🔝](#list-of-katas)
```javascript
// 3: template strings - tagged
// To do: make all tests pass, leave the asserts unchanged!

describe('tagged template strings, are an advanced form of template strings', function() {
  
  it('syntax: prefix the template string with a function to call (without "()" around it)', function() {
    function tagFunction(s) {
      return s.toString();
    }
    var evaluated = tagFunction `template string`;
    assert.equal(evaluated, 'template string');
  });
  
  describe('the function can access each part of the template', function() {

    describe('the 1st parameter - receives only the pure strings of the template string', function() {

      function tagFunction(strings) {
        return strings;
      }

      it('the strings are an array', function() {
        var result = ['template string'];
        assert.deepEqual(tagFunction`template string`, result);
      });

      it('expressions are NOT passed to it', function() {
        var tagged = tagFunction`one${23}two`; 
        assert.deepEqual(tagged, ['one', 'two']);
      });

    });

    describe('the 2nd and following parameters - contain the values of the processed substitution', function() {

      var one = 1;
      var two = 2;
      var three = 3;
      it('the 2nd parameter contains the first expression`s value', function() {
        function firstValueOnly(strings, firstValue) { 
          return firstValue;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
      });
      
      it('the 3rd parameter contains the second expression`s value', function() {
        function firstValueOnly(strings, firstValue, secondValue) { 
          return secondValue;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 2);
      });
      
      it('using ES6 rest syntax, all values can be accessed via one variable', function() {
        function valuesOnly(stringsArray, ...allValues) { // using the new ES6 rest syntax
          return allValues;
        }
        assert.deepEqual(valuesOnly`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]);
      });
      
    });     
  });

});
```
## 4: template strings - String.raw [🔝](#list-of-katas)
```javascript
// 4: template strings - String.raw
// To do: make all tests pass, leave the asserts unchanged!

describe('on tagged template strings you can use the `raw` property like so `s.raw`', function() {
  
  it('the `raw` property accesses the string as it was entered', function() {
    function firstChar(strings) {
      return strings.raw;
    }
    assert.equal(firstChar`\n`, '\\n');
  });

  it('`raw` can access the backslash of a line-break', function() {
    function firstCharEntered(strings) {
      var lineBreak = strings.raw.toString();
      return lineBreak[0];
    }
    assert.equal(firstCharEntered`\n`, '\\');
  });

  describe('`String.raw` as a static function', function(){
    
    it('concats the raw strings', function() {
      var expected = '\\n';
      assert.equal(String.raw`\n`, expected);
    });
    
    it('two raw-templates-string-backslashes equal two escaped backslashes', function() {
      const TWO_BACKSLASHES = '\\\\';
      assert.equal(String.raw`\\`, TWO_BACKSLASHES);
    });
    
    it('works on unicodes too', function() {
      var smilie = '\\u{1F600}';
      var actual = String.raw`\u{1F600}`;
      assert.equal(actual, smilie);
    });
    
  });
});
```
## 5: arrow functions - basics [🔝](#list-of-katas)
```javascript
// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {
  
  it('are shorter to write', function() {
    var func = () => {
      return 'I am func';
    };
    assert.equal(func(), 'I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    var func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });

  it('one parameter can be written without parens', () => {
    var func = param => param + 1;
    assert.equal(func(23), 24);
  });

  it('many params require parens', () => {
    var func = (param,param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });

  it('body needs parens to return an object', () => {
    var func = () => ({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });

});
```
## 6: arrow functions - binding [🔝](#list-of-katas)
```javascript
// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!

class LexicallyBound {
  
  getFunction() {
    return () => {
      return this;
    }
  }
  
  getArgumentsFunction() {
    return () => {
      return arguments
    }
  }
  
}

describe('arrow functions have lexical `this`, no dynamic `this`', () => {
 
  it('bound at definition time, use `=>` ', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    
    assert.strictEqual(fn(), bound);
  });
 
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var anotherObj = {};
    var expected = bound;
    
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  
  it('`arguments` doesnt work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    
    assert.equal(fn(1, 2).length, 0);
  });
  
});

```
## 7: block scope - let [🔝](#list-of-katas)
```javascript
// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });
    
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
    
  });

  describe('`let` usage', () => {
    
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (let key in obj) {}
      assert.throws(() => console.log(key));
    });
    
    it('create artifical scope, using curly braces', () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
    
  });
  
});
```
## 8: block scope - const [🔝](#list-of-katas)
```javascript
// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

  describe('scalar values are read-only', () => {

    it('number', () => {
      const constNum = 0;
      //constNum = 1; // Esto daría un: "Uncaught TypeError: Assignment to constant variable"
      assert.equal(constNum, 0);
    });

    it('string', () => {
      const constString = 'I am a const';
      //constString = 'Cant change you?';
      assert.equal(constString, 'I am a const');
    });

  });
  
  const notChangeable = 23;

  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });
  
  describe('complex types are NOT fully read-only', () => {

    it('array', () => {
      const arr = [42, 23];
      //arr[0] = 0; Cuidado aquí no nos da el error el modificar los valores internos, si si asignamos el valor a arr esto es una causa de porque dos objetos nunca son iguales aunque tengan las mismas propiedades
      const arr2 = [42,23];
      console.log(arr === arr2);
      assert.equal(arr[0], 42);
    });
    
    it('object', () => {
      const obj = {x: 1};
      obj.x += 2;
      assert.equal(obj.x, 3);
    });
    
  });

});

```
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
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
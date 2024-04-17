const palindromo = require('../utils/palindromo');

test('Reverse de roma es amor', () => {

  expect(palindromo('roma')).toBe("amor");

});

test('Reverse de pelo es olep', () => {

    expect(palindromo('pelo')).toBe("olep");
  
  });
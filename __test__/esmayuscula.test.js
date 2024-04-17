const isUpperCase = require('../utils/esmayuscula');

    test("a es A", () => {  

    expect(isUpperCase("A")).toBe(true);
})

test("b es B", () => {  

    expect(isUpperCase("B")).toBe(true);
})
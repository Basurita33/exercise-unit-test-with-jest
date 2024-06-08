const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("1 euro to dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("1 dollar to yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1/1.07*156.5; 
     expect(yen).toBeCloseTo(expected);
});
test("100 yen to pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(100);
    const expected = 100 / 156.5 * 0.87; 
     expect(pound).toBeCloseTo(expected);
});
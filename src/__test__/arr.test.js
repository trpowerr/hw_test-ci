import personArr from '../js/arr';

test('should check the order ', () => {
  const received = personArr;
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

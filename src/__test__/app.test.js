import hpColor from '../js/app';

test('check boundary values', () => {
  const received = hpColor({ name: 'Маг', health: 14 });
  const expected = 'critical';
  expect(received).toBe(expected);
});
test('check boundary values', () => {
  const received = hpColor({ name: 'Маг', health: 15 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});
test('check boundary values', () => {
  const received = hpColor({ name: 'Маг', health: 50 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});
test('check boundary values', () => {
  const received = hpColor({ name: 'Маг', health: 51 });
  const expected = 'healthy';
  expect(received).toBe(expected);
});

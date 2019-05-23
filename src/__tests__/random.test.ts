import { randomColor } from '../index';

test('randomColor', () => {
  const color = randomColor();
  const reg = /^#([0-9]|[a-f]){6}/;
  expect(color).toMatch(reg);
});

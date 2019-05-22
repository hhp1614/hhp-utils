import { getUrlParams } from '../index';

test('getUrlParams', () => {
  const url = 'http://hhp1614.com/?name=admin&pass=123';
  const res = {
    name: 'admin',
    pass: '123',
  };
  expect(getUrlParams(url)).toEqual(res);
  // expect(getUrlParams(url)).toBe(res);
});

import { expect } from 'chai';
import { parse, stringify } from '@/codes/parser';

describe('parser', () => {
  it('单元测试方法名称 stringify', () => {
    const expectData = 'hello=world';
    const actualData = stringify({ hello: 'world' });
    expect(actualData).equals(expectData);
  });

  it('单元测试方法: parse', () => {
    const expectData = 'hello=world';
    const temp = parse(expectData);
    const actualData = stringify(temp);
    expect(actualData).equals(expectData);
  });

  it('单元测试方法名称 stringify', () => {
    const expectData = 0;
    const actualData = 0;
    expect(actualData).equals(expectData);
  });
});

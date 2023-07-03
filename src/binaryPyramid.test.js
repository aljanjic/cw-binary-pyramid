const binaryPyramid = require('./binaryPyramid');

describe('binaryPyramid', () => {
  it('(1,4) should return 1111010', () => {
    expect(binaryPyramid(1,4)).toBe(1111010);
  });

  it('(1,6) should return 101001101', () => {
    expect(binaryPyramid(1,6)).toBe(101001101);
  });

  it('(1,6) should return 101001101', () => {
    expect(binaryPyramid(1,6)).toBe(101001101);
  });
  
});

const binaryPyramid = require('./binaryPyramid');

describe('binaryPyramid', () => {
  it('(1,4) should return 1111010', () => {
    expect(binaryPyramid(1,4)).toBe(1111010);
  });
});

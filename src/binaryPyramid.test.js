const binaryPyramid = require('./binaryPyramid');

describe('binaryPyramid', () => {
  it('(1,4) should return 1111010', () => {
    expect(binaryPyramid(1,4)).toBe("1111010");
  });

  it('(1,6) should return 101001101', () => {
    expect(binaryPyramid(1,6)).toBe("101001101");
  });

  it('(6,20) should return 1110010110100011', () => {
    expect(binaryPyramid(6,20)).toBe("1110010110100011");
  });

  it('(21,60) should return 1100000100010001010100', () => {
    expect(binaryPyramid(21,60)).toBe("1100000100010001010100");
  });

});

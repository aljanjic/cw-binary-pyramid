function binaryPyramid(m = 0, n = 0 ) {

  let result = 0;

  for ( let i = m; i <= n; i++){
    const binaryNumber = parseInt(i.toString(2));
    result += binaryNumber;
  }

  return result.toString(2);
}

module.exports = binaryPyramid;

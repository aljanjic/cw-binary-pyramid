# Notes
Given two numbers m and n, such that 0 ≤ m ≤ n :

    convert all numbers from m to n (inclusive) to binary
    sum them as if they were in base 10
    convert the result to binary
    return as a string

Example

1, 4  -->  1111010

because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010


## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

- ✅ '(1,4) should return 1111010'
- ✅ '(1,6) should return 101001101'
- ✅ '(6,20) should return 1110010110100011'
- ✅ '(21,60) should return 1100000100010001010100'
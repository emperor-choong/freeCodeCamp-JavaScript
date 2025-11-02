# Decimal to Binary
## [2 October 2025]

Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits `0` and `1` to represent any number. To convert a decimal number to binary, repeatedly divide the number by `2` and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first. For example, to convert `12` to binary:

```javascript
12 ÷ 2 = 6 remainder 0
6 ÷ 2 = 3 remainder 0
3 ÷ 2 = 1 remainder 1
1 ÷ 2 = 0 remainder 1
```

`12` in binary is `1100`.

**Tests**
1. `toBinary(5)` should return `"101"`.
2. `toBinary(12)` should return `"1100"`.
3. `toBinary(50)` should return `"110010"`.
4. `toBinary(99)` should return `"1100011"`.
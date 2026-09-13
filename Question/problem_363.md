# RGB to Hex                                                                                                                     
## [2 September 2026]

Given a CSS `rgb(r, g, b)` color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

| Input                    | Output        |
|:------------------------:|:-------------:|
| `"rgb(255, 255, 255)"` | `"#ffffff"` |
| `"rgb(1, 2, 3)"`       | `"#010203"` |

- Make any letters lowercase.
- Return a `#` followed by six characters. Don't use any shorthand values.

**Tests:**
1. `rgbToHex("rgb(255, 255, 255)")` should return `"#ffffff"`.
2. `rgbToHex("rgb(1, 11, 111)")` should return `"#010b6f"`.
3. `rgbToHex("rgb(173, 216, 230)")` should return `"#add8e6"`.
4. `rgbToHex("rgb(79, 123, 201)")` should return `"#4f7bc9"`.
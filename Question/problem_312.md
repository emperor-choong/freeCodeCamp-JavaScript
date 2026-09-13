# Tally Counter                                                                             
## [13 July 2026]

Given a string of tally marks, return the total count represented.
- Each pipe `"|"` represents one count.
- Every fifth mark is represented as a forward slash `"/"`, completing a group of five (`"||||/"`).
- Groups are separated by a space.

**Tests:**
1. `getTallyCount("||||")` should return `4`.
2. `getTallyCount("||||/")` should return `5`.
3. `getTallyCount("||||/ |||")` should return `8`.
4. `getTallyCount("||||/ ||||/ ||||/ ||")` should return `17`.
5. `getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |")` should return `41`.
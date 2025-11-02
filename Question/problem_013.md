# File Storage
## [20 September 2025]

Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:
- The unit for the file size can be bytes (`"B"`), kilobytes (`"KB"`), or megabytes (`"MB"`).
- Return the number of whole files the drive can fit.
- Use the following conversions:

| Unit | Equivalent |
|------|------------|
| 1B   | 1B         |
| 1KB  | 1000B      |
| 1MB  | 1000KB     |
| 1GB  | 1000MB     |

For example, given `500`, `"KB"`, and `1` as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

**Tests**
1. `numberOfFiles(500, "KB", 1)` should return `2000`.
2. `numberOfFiles(50000, "B", 1)` should return `20000`.
3. `numberOfFiles(5, "MB", 1)` should return `200`.
4. `numberOfFiles(4096, "B", 1.5)` should return `366210`.
5. `numberOfFiles(220.5, "KB", 100)` should return `453514`.
6. `numberOfFiles(4.5, "MB", 750)` should return `166666`.
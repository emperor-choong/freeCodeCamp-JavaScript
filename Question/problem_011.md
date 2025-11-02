# Fill The Tank
## [18 September 2025]

Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.
- `tankSize` is the total capacity of the tank in gallons.
- `fuelLevel` is the current amount of fuel in the tank in gallons.
- `pricePerGallon` is the cost of one gallon of fuel.
- The returned value should be rounded to two decimal places in the format: `"$d.dd"`.

**Tests**
1. `costToFill(20, 0, 4.00)` should return `"$80.00"`.
2. `costToFill(15, 10, 3.50)` should return `"$17.50"`.
3. `costToFill(18, 9, 3.25)` should return `"$29.25"`.
4. `costToFill(12, 12, 4.99)` should return `"$0.00"`.
5. `costToFill(15, 9.5, 3.98)` should return `"$21.89"`.
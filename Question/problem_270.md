# Schema Validator Part 1                                                  
## [1 June 2026]

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

```javascript
{
  username: string
}
```

- Extra keys are allowed

**Tests:**
1. `isValidSchema({ username: "bob" })` should return `true`.
2. `isValidSchema({ username: "jen", posts: 30 })` should return `true`.
3. `isValidSchema({ username: "" })` should return `true`.
4. `isValidSchema({ username: 7 })` should return `false`.
5. `isValidSchema({ posts: 25 })` should return `false`.
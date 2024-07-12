---
title: Basic Data types
---

Lubalia comes with some built-in data types, however, you can modify the language for adding your own data types.

:::note
When working with data, these data types can be transcribed into Arithmetic Types, which not always are reverted to the original value.
:::

## Number
Represented in memory as a 64-bit floating-point value (f64). Can be any value in the range of *±1.7976E+320*. You can add `_` when defining a number for an easier to read format (example: `10_000_000`).

## String
Represented in memory as a slice of bytes. When defining a string literal, only double quotes are supported.

### Referencing variables
The `$` symbol allows to reference variables inside a string. Example:
```
let name = "Joe";
let greeting = "Hello, $name!";
```

## Boolean
A single bit, either `true` or `false`.
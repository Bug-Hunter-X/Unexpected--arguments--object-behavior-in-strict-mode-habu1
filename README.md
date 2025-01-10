# Unexpected 'arguments' object behavior in strict mode

This repository demonstrates an uncommon JavaScript bug related to the `arguments` object within strict mode functions.  In non-strict mode, `arguments` acts as a live, array-like object reflecting the function's parameters.  However, in strict mode, this behavior changes, potentially leading to unexpected results.

## Bug Description

The bug arises from the assumption that `arguments` will always reflect parameter changes.  In strict mode, this is not guaranteed, causing inconsistencies when modifying parameters or using `arguments` within the function.

## Solution

The solution involves avoiding reliance on the `arguments` object in strict mode. Use the rest parameter syntax (`...args`) as a more robust and predictable way to handle function arguments.
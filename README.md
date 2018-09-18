# data-structures-and-algorithms

## Reverse an Array
This is the first whiteboarding challenge where I was to create a function that reverses the contents of a given array without returning a new array or using built-in JavaScript methods. I ended up using an additional array which I did not know was forbidden at the time, but I did not return that array according to the instructions.

### Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return the provided array argument with elements in reversed order.

### Solution
![array_reverse](assets/array_reverse.jpg "array_reverse")

### Shift an Array
This challenge was to take 2 inputs, one array and one value, and insert the given value into the middle index of the array. This was pretty easy to do since we were allowed to use built-in methods and splice could do exactly what I needed.

### Challenge
Insert and shift an array in middle at index

### Solution
![array_reverse](assets/array_shift.jpg "array_reverse")

## Linked List Insertions
This challenge included the creation of 3 methods for an already existing linked list constructor. The 3 methods included adding new nodes to a linked list. One that appended a new node to the tail, one that, given a value, inserts a new node before that value, and finally a method that inserted a new node after a given value.
### Challenge
    Write the following methods for the Linked List class:

- .append(value) which adds a new node with the given value to the end of the list

- .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

- .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
You have access to the Node class and all the properties on the Linked List class.

### Solution
![ll_insertion1](assets/ll_insertions1.jpg "array_insertion1")
![ll_insertion2](assets/ll_insertions2.jpg "array_insertion2")

## Linked List kth from end
This challenge included creating another method for the LinkedList class that takes in a value, k,
and returns the value of the node that is k nodes from the end of the list. 
## Challenge
    Write the following methods for the Linked List class:

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges. ​

## Solution
![kth_from_end](assets/ll_kth_from_end.jpg "kth_from_end")

[![Build Status](https://travis-ci.com/tnorth93/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/tnorth93/data-structures-and-algorithms)
/**
 * Use this file as a scratchpad to manually test your code.
 *
 * You can run this file using:
 * npm run dev
 */

// Example:
// import { formatName } from './exercise01.js';
// console.log(formatName('John', 'Doe', 'Quincy'));
import { getInventoryValue } from './exercise03.js';

const inventory: Array<[string, number, number]> = [
  ['Laptop', 10, 1],
  ['Keyboard', 3, 2],
  ['Mouse', 8, 3],
  ['Monitor', 6, 4],
  ['Headphones', 5, 5],
];

console.log(getInventoryValue(inventory));
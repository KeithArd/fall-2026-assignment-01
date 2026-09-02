/**
 * Use this file as a scratchpad to manually test your code.
 *
 * You can run this file using:
 * npm run dev
 */

// Example:
// import { formatName } from './exercise01.js';
// console.log(formatName('John', 'Doe', 'Quincy'));
import { calculateSubjectAverage } from './exercise07.js';
import * as fs from 'fs';
const inputData = fs.readFileSync('data/gradebook.json', 'utf-8');
// console.log('test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(inputData);

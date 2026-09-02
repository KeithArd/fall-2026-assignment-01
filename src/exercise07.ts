import * as fs from 'fs';
import * as path from 'path';

export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};

const filePath = path.join(__dirname, '../data/gradebook.json');

export function calculateSubjectAverage(subject: string): number {
  const filePath = path.join(__dirname, '../data/gradebook.json'); // build path relative to this file's location
  const inputData = fs.readFileSync(filePath, 'utf-8'); // read in the json file
  const gradebook: Gradebook = JSON.parse(inputData); // parse data into object with type Gradebook

  let sum: number = 0; // number to hold sum of scores in given subject
  let numOfScores: number = 0; // total number of scores to be used to calculate average

  // loop through students in gradebook
  for (const studentName in gradebook) {
    const studentGrades = gradebook[studentName]; // get the student grades (nested object)

    // if student has a grade in the given subject, then:
    // iterate number of scores,
    // add score to sum
    if (subject in studentGrades) {
      numOfScores++;
      sum += studentGrades[subject];
    }
  }

  // if number of scores is not zero, return average. otherwise return 0
  return numOfScores ? sum / numOfScores : 0;
}

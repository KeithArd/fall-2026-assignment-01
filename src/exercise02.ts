export function transcribeDNA(dna: string): string {
  // map from DNA to RNA
  const RNAMap: Record<string, string> = {
    A: 'U',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  // list of valid characters
  const validChars: string = 'ATCG';

  // check if input string is valid
  const isValid = dna.split('').every((s: string) => validChars.includes(s));
  
  // throw error if input is not a valid sequence
  if (!isValid) {
    throw new Error('not a valid sequence');
  }

  // transcriber helper function
  const transcriber = (s: string) => RNAMap[s];
  
  // transcribe all characters in string
  const result = dna
    .split('')
    .map(transcriber)
    .join('');
  
  return result;
}

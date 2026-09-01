export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  let result: string = lastName + ', ' + firstName;
  
  // if middle name is not null, add middle initial to result
  if (middleName) {
    result = result + ' ' + middleName[0] + '.';
  }

  return result;
}

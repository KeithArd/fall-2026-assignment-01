export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  const result: number = inventory
    .filter(item => item[1] > 5) // filter only items with quantity over 5
    .map(item => item[1] * item[2]) // get dollar amount (item price * quantity)
    .reduce((sum, current) => sum + current, 0); // sum up dollar amount

  return result;
}

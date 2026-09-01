export type Circle = {
  kind: 'circle';
  radius: number;
};

export type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

export type Square = {
  kind: 'square';
  sideLength: number;
};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  let area: number = 0;

  switch (shape.kind) {
    case 'circle':
      area = Math.PI * shape.radius ** 2;
      break;
    case 'rectangle':
      area = shape.width * shape.height;
      break;
    case 'square':
      area = shape.sideLength ** 2;
      break;
  }

  return area;
}

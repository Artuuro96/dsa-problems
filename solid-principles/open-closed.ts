/*
An entity should be open for extension but closed for modification
*/
class Rectangle {
  width: number = 0;
  heigth: number = 0;
}

class Triangle {
  width: number = 0;
  heigth: number = 0;
}

/*
If we would add more shapes, we will need more if conditions calculate the area for each shape
so it means the class is OPEN FOR MODIFICATIONS
*/
class AreaCalculator {
  computeArea(shape: Rectangle | Triangle ): number {
    if(shape instanceof Rectangle) {
      return shape.width * shape.heigth;
    }

    if(shape instanceof Triangle) {
      return shape.heigth * shape.width / 2;
    }

    throw Error('Shape not supported');
  }
}

/*
Instead of doing that, we can go with this implementation
*/
interface IShape {
  area(): number;
}

class Rectangle1 implements IShape {
  width: number;
  heigth: number;

  constructor(width: number, heigth: number) {
    this.heigth = heigth;
    this.width = width;
  }

  public area(): number {
    return this.heigth * this.width;
  }
}

class Triangle1 implements IShape {
  width: number;
  heigth: number;

  constructor(width: number, heigth: number) {
    this.heigth = heigth;
    this.width = width;
  }

  public area(): number {
    return this.heigth * this.width / 2;
  }
}

class AreaCalculator1 {
  computeArea(shape: IShape): number {
    return shape.area();
  }
}

const triangle = new Triangle1(2, 4);
const rectangle = new Rectangle1(2,3);
const areaCalculator = new AreaCalculator1();

console.log('Triangle: ', areaCalculator.computeArea(triangle));
console.log('Rectangle: ', areaCalculator.computeArea(rectangle));

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  getArea() {
    return this.length * this.breadth;
  }
  getPerimeter() {
    return this.length * 4;
  }
}

class Square extends Rectangle {
  constructor(side, side2) {
    super(side, side2);
  }
}

var rec = new Square(3, 5);
console.log(rec.getArea());

var sq = new Square(6);
console.log(sq.getPerimeter());

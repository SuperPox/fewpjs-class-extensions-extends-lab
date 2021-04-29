// Your code here

class Polygon{
    constructor(intArr) {
        this.intArr = intArr;
        this.count = this.intArr.length;
    }

    get countSides() {
        return this.intArr.length;
    }

    get perimeter() {
        let sum = 0;
        for (var int of this.intArr){
            sum += int
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.intArr.length != 3) return "not a triangle";
        let side1 = this.intArr[0]
        let side2 = this.intArr[1]
        let side3 = this.intArr[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.intArr.length != 4) return;
        let side1 = this.intArr[0]
        let side2 = this.intArr[1]
        let side3 = this.intArr[2]
        let side4 = this.intArr[3]
        return (side1 == side2 == side3 == side4)
    }
    get area() {
        if (this.intArr.length !== 4) return;
        return this.intArr[0] * this.intArr[0];
    }
}
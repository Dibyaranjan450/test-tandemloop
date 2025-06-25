class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation =
      typeof operation === "string" ? operation.toLowerCase() : null;
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;

      case "sub":
        return this.a - this.b;

      case "multiply":
        return this.a * this.b;

      case "divide":
        if (this.b === 0) {
          return "Error: Division by zero";
        }
        return this.a / this.b;

      default:
        return "Error: Unknown operation";
    }
  }
}

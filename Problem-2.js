function generateOddNumbers(a) {
  if (!Number.isInteger(a) || a < 1) {
    return "Error: Input must be a positive integer";
  }

  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }

  console.log(result.join(", "));
}

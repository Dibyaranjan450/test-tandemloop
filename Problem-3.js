function generateOddSeries(a) {
  if (!Number.isInteger(a) || a < 1) {
    return "Error: Input must be a positive integer";
  }

  const limit = a % 2 === 0 ? a - 1 : a;
  const result = [];

  for (let i = 0; i < limit; i++) {
    result.push(2 * i + 1);
  }

  console.log(result.join(", "));
}
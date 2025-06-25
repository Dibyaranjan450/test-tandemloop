function countMultiples(inputArray) {
  const result = {};

  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  inputArray.forEach((num) => {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  });

  console.log(result);
}

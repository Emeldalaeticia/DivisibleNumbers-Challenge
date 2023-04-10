
function sumOfNoDivisibleByThreeOrFive() {
    let numbers = [];
    let sum = 0;
    process.stdout.write("Please enter a positive integer: ");
    process.stdin.once('data', (input) => {
      let n = parseInt(input.toString().trim());
      try {
        if (!Number.isInteger(n) || n < 1) {
          throw new Error("Invalid input. Please enter a positive integer.");
        }
        for (let i = 1; i <= n; i++) {
          if (i % 3 === 0 || i % 5 === 0) {
            numbers.push(i);
            sum += i;
          }
        }
        console.log("Numbers used:", numbers);
        console.log("Sum:", sum);
      } catch (err) {
        console.error(err.message);
      }
      process.stdin.pause();
    });
    process.stdin.resume();
  }
  
  sumOfNoDivisibleByThreeOrFive();
  
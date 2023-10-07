function hasTargetSum(nums, target) {
  const Numbers =  new Set();

  for (const num of nums) {
      const complement = target-num;
if (Numbers.has(complement)) {
          return true;
      }

      Numbers.add(num);
  }

  return false;
}

// Example usage:
const numbers = [3,9,34,8 ,56, 43];
const targetSum = 88;

const result = hasTargetSum(numbers, targetSum);
console.log(result)





  // Write your algorithm here

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  write a function
  create an array of numbers
    create a target number
    return true if any of the pairs in the array add up to the target number
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

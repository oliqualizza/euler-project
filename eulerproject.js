let sumOfMultiples = function(limit) {
	let sum = 0;
	for (let i = 0; i < limit; i++) {
		if ((i % 3 == 0) || (i % 5 == 0)) {
			sum += i; 
		} 
	} 
	return sum; 
};


let sumOfEvenFibonacci = function(limit) {
	let sum = 0;
	let fiboCounter1 = 0;
	let fiboCounter2 = 1;
	while (fiboCounter1 < limit) {
		if (fiboCounter1 % 2 == 0) {
			sum += fiboCounter1;
		}
		let temp = fiboCounter2;
		fiboCounter2 = fiboCounter1 + fiboCounter2;
		fiboCounter1 = temp;
	} 
	return sum;
}

let checkPrime = function(num) {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) {
			return false; 
		} 
	}
  return num > 1;
}

let largestPrimeFactor = function(num) {
	let primeFactors = [];
	for (let i = 1; i < Math.sqrt(num); i++) {
		if (checkPrime(i) && num % i == 0) {
			primeFactors.push(i);
		}
	}
	return primeFactors[primeFactors.length - 1];
}

let isPalindrome = function(num) {
  let palindrome = false;
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] != num[num.length - 1 - i]) {
      console.log("this is not a palindrome");
      break;
    } else if (i == num.length / 2 - 1) {
      console.log("this is a palindrome");
      palindrome = true;
    }
  }
  return palindrome;
}

let largestTwoThreeDigitPalindrome = function() {
	let largestPalindromeProduct = null;
	let tempLargest = null;
	for (let firstFactor = 999, secondFactor = 999; firstFactor >= secondFactor, secondFactor > 0; firstFactor--, secondFactor--) {
		tempLargest = firstFactor * secondFactor;
		if (isPalindrome(tempLargest)) {
			largestPalindromeProduct = tempLargest;
			break;
		}
	}
	return largestPalindromeProduct;
}
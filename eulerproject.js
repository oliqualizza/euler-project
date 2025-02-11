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
	let palindrome = true;
	for (let i = 0; i < num.length - i; i++) {
		if (num[i] !== num[num.length - 1 - i]) {
			console.log("this is not a palindrome");
			palindrome = false;
		break;
		} else if (i === num.length - i) {
			console.log("this is a palindrome");
		}
	}
	return palindrome;
}
  
let largestThreeDigitNumbersProductPalindrome = function() {
	let largestPalindromeProduct = 0;
	let tempLargest = null;
	let firstFactor = 999, secondFactor = 999;
	while (firstFactor >= 100 && secondFactor >= 100) {
		tempLargest = firstFactor * secondFactor;
		if (isPalindrome(toString(tempLargest)) && tempLargest > largestPalindromeProduct) {
			largestPalindromeProduct = tempLargest;
			break;
		} else if (firstFactor > secondFactor) {
			secondFactor--;
		} else {
			firstFactor--;
			secondFactor--;
		}
	}
	return largestPalindromeProduct;
}
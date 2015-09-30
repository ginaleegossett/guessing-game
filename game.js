var question1 = prompt("Was it easy to get to CF today?");

if (question1.toUpperCase() === 'YES') {
	alert('Lucky you');
} else {
	alert('Sucks to be you')
}

console.log('Question 1 response: ' + question1);
console.log('Question 1 response toUpperCase(): ' + question1.toUpperCase());
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

const test = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
console.log(test);

// function anagrams(word, words) {
// 	const results = [];
// 	const sortedWord = word.split('').sort().join();
// 	for (item of words) {
// 		const sortedItem = item.split('').sort().join();
// 		if(sortedItem === sortedWord) {
// 			results.push(item);
// 		}
// 	}
// 	return results;
// }

function anagrams(word, words) {
	const sort = (word) => word.split('').sort().join();
	return words.filter(w => sort(w) === sort(word));
}

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

console.log(towerBuilder(4))

// function towerBuilder(nFloors) {
// 	if (nFloors <= 0) {
// 		throw new Error('must be greater than 1');
// 	}
// 	const result = [];
// 	const maxL = ((nFloors-1) * 2) + 1;
// 	for (var i = 0; i < nFloors; i++) {
// 		const floorCols = i * 2 + 1;
// 		let cols = '';
// 		for (let j = 0; j < floorCols; j++) {
// 			cols += '*';
// 		}
// 		result.push(addSpace(cols, maxL - cols.length))
// 	}

// 	return result;
// }

// function addSpace(str, space){
// 	return new Array((space/2)+1).join(' ') + str + new Array((space/2)+1).join(' ')
// }



function towerBuilder(n) {
	return Array.from({length: n}, function(v, k) {
	  const spaces = ' '.repeat(n - k - 1);
	  return spaces + '*'.repeat(k + k + 1) + spaces;
	});
  }

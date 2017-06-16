// for (var i = 1; i <= 100; i++) {

// 	if ((i % 3 === 0) && (i % 5 === 0)) {
// 		console.log('fizzbuzz');
// 	} else if (i % 3 === 0) {
// 		console.log('fizz');
// 	} else if (i % 5 === 0) {
// 		console.log('buzz');
// 	} else console.log(i);

// }

// for (var i = 1; i <= 100; i++) {

// 	(i % 3 === 0) && (i % 5 === 0) ? console.log('fizzbuzz') 
// 		: ((i % 3 === 0) ? console.log('fizz')
// 			: (i % 5 === 0) ? console.log('buzz') 
// 				: console.log(i));


// }

for (var i = 1; i <= 100; i++){

	switch (true){

		case (i % 3 === 0) && (i % 5 === 0): console.log('fizzbuzz');
		break;

		case (i % 3 === 0): console.log('fizz');
		break;

		case (i % 5 === 0): console.log('buzz');
		break;

		default: console.log(i);
	}

}
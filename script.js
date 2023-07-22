let numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?','');
let personalMoviesDb = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	rating: [],
	privat: false
};

// for (let i=0; i<2; i++) {
// 	let a=prompt('Ваш последний просмотреный фильм?',''), b=prompt('Оцените последний просмотреный фильм','');
//     personalMoviesDb.movies[a]=b;

// if (a != null && b != null && a!='' && b != '' && a.length < 50 && b.length <50) {
//     console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     };
// };
// let x=0;
// while (x<2) {
// 	let a=prompt('Ваш последний просмотреный фильм?',''), 
// 		b=prompt('Оцените последний просмотреный фильм','');
// 	if (a != null && b != null && a!='' && b != '' && a.length < 50 && b.length <50) {
// 		personalMoviesDb.movies[a]=b;
// 		console.log('Done!');
// 	} else {
// 		console.log('Error!');
// 		x--;
// 	}
// 	x++;
// };

let x=0;
while (x<2) {
	let a=prompt('Ваш последний просмотреный фильм?',''), 
		b=prompt('Оцените последний просмотреный фильм','');

		(a!=null && b!=null && a!='' && b!='' && a.length<50) ? personalMoviesDb.movies[a]=b : x--, console.log('Error!');
		x++;
};



if (personalMoviesDb.count <=10) {alert('Просмотрено довольно мало фильмов');}
else if (personalMoviesDb.count >=10 && personalMoviesDb.count <30) {alert('Вы класический зритель');}
else if (personalMoviesDb.count > 30) {alert ('Вы киноман!');}
else {console.log('Error!!!');}

console.log(personalMoviesDb);
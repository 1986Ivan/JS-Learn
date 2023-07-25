"use strict";

let numbersOfFilms;

function start() {
        while (numbersOfFilms=='' || numbersOfFilms==null || isNaN(numbersOfFilms)){
        numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?','');
    }
}
start();

let personalMoviesDb = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	rating: [],
	privat: false,
    genres: []
};

function rememberMyFils(){
    for (let i=0; i<2; i++) {
        let a=prompt('Ваш последний просмотреный фильм?',''), b=prompt('Оцените последний просмотреный фильм','');
        personalMoviesDb.movies[a]=b;
    
    if (a != null && b != null && a!='' && b != '' && a.length < 50 && b.length <50) {
        console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        };
    };
}

rememberMyFils();

function detectPersonalLevel() {
    if (personalMoviesDb.count <=10) {alert('Просмотрено довольно мало фильмов');}
else if (personalMoviesDb.count >=10 && personalMoviesDb.count <30) {alert('Вы класический зритель');}
else if (personalMoviesDb.count > 30) {alert ('Вы киноман!');}
else {console.log('Error!!!');}
}
detectPersonalLevel();

function showMyDatabase (){
    if (personalMoviesDb.privat === false) {
        console.log(personalMoviesDb);
    }
}
showMyDatabase();

function writeYouGenres () {
    for (let i=1; i<=3; i++) {
        let genre=prompt(`Your favorite genre on nomber ${i}?`);
        personalMoviesDb.genres[i-1]=genre;
    }
}
writeYouGenres();



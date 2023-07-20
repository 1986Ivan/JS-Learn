"use strict"

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Какой последний фильм вы смотрели?', ''),
    b = prompt ('Оцените фильм от 1 до 10 балов', ''),
    c = prompt ('Какой последний фильм вы смотрели?', ''),
    d = prompt ('Оцените фильм от 1 до 10 балов', ''); 
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);
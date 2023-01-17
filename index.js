'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let count = 1;
let fimls, star;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
    const fimls = prompt('Один из последних просмотренных фильмов?'),
          star = prompt('На сколько оцените его?');

    if (fimls != null && star != null && fimls != '' && star != '' && fimls.length < 50) {
        personalMovieDB.movies[fimls] = star;
        console.log('done');
    } else {
        i--;
        console.log('eror');
    }
    
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (10 >= personalMovieDB.count && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


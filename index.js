'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function showMyDB (open) {
    if (!open) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYouGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYouGenres();







function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (10 >= personalMovieDB.count && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }   
}

detectPersonalLevel();

console.log(personalMovieDB);
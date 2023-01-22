'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    }
    },
    showMyDB: function(open) {
        if (!open) {    
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYouGenres: function() {



        for(let i = 1; i < 2; i++) {

            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if(genre === '' || genre === null) {
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // } 

            let genres = prompt(`Введите жанры через запятую`).toLocaleLowerCase();

            if(genres === '' || genres === null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }


            
        }

        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${element}`);
        });

    },
    rememberMyFilms: function() {
        for (let i = 0; i < personalMovieDB.count; i++) {
            const fimls = prompt('Один из последних просмотренных фильмов?').trim(),
                  star = prompt('На сколько оцените его?');
        
            if (fimls != null && star != null && fimls != '' && star != '' && fimls.length < 50) {
                personalMovieDB.movies[fimls] = star;
                console.log('done');
            } else {
                i--;
                console.log('eror');
            }
            
        }
    },
    detectPersonalLevel: function() {
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
};





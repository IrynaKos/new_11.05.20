"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Ile filmów oglądasz rocznie?`, ``);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Ile filmów oglądasz rocznie?`, ``);  
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

// const a = prompt(`Ostatni film, który oglądałeś?`, ``),
//       b = prompt(`Jak go oceniasz?`, ``),
//       c = prompt(`Ostatni film, który oglądałeś?`, ``),
//       d = prompt(`Jak go oceniasz?`, ``);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt(`Ostatni film, który oglądałeś?`, ``),
//               b = prompt(`Jak go oceniasz?`, ``);
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done!');
//         } else {
//             console.log ('Error');
//             i--;
//         }  
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         alert('Mało ogłądasz filmów');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Jesteś super!');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Za dużo! Nie przesadzaj!');
//     } else {
//         alert('Coś poszło nie tak!');
//     }
// }

// detectPersonalLevel();

// console.log(personalMovieDB);

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
         const genre = prompt(`Twój ulubiony gatunek filmów pod numerem ${i}`,'' );

        if (genre != null &&  genre != '' /*&& !isNan(genre)*/)  {
            personalMovieDB.genres[i - 1] = genre;
        } else {
            i--;
        }
    }
}

writeYourGenres();
 console.log(personalMovieDB);


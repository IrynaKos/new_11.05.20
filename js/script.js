"use strict";

const numberOfFilms = +prompt(`Ile filmów oglądasz rocznie?`, ``);
// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt(`Ostatni film, który oglądałeś?`, ``),
//       b = prompt(`Jak go oceniasz?`, ``),
//       c = prompt(`Ostatni film, który oglądałeś?`, ``),
//       d = prompt(`Jak go oceniasz?`, ``);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++){
    const a = prompt(`Ostatni film, który oglądałeś?`, ``),
          b = prompt(`Jak go oceniasz?`, ``);

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log ('Error');
        i--;
    }  
}

if (personalMovieDB.count < 10) {
    alert('Mało ogłądasz filmów')
} else if (personalMovieDB.count == 10 || personalMovieDB.count < 30) {
    alert('Jesteś super!')
} else if (personalMovieDB.count > 30) {
    alert('Za dużo! Nie przesadzaj!')
} else {
    alert('Coś poszło nie tak!')
}



console.log(personalMovieDB);






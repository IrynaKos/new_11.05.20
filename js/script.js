"use strict";

const numberOfFilms = +prompt(`Ile filmów oglądasz rocznie?`, ``);
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(`Ostatni film, który oglądałeś?`, ``),
      b = prompt(`Jak go oceniasz?`, ``),
      c = prompt(`Ostatni film, który oglądałeś?`, ``),
      d = prompt(`Jak go oceniasz?`, ``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




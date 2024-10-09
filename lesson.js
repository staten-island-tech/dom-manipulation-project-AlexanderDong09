const students = ["Matt", "Mark", "Jo", "Tjomas"];

// students.forEach((students) => console.log(students)); // allows to loop thru each element in the list

console.log(students[5]);

const movie = {
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
};

const movies = [
  {
    title: "Star Wars",
    release: 1977,
    actors: ["Mark", "Harrison", "Carrie"],
  },
  {
    title: "lion Wars",
    release: 1980,
    actors: ["Mark", "Harrison", "Carrie"],
  },
  {
    title: "Empir Warse",
    release: 1994,
    actors: ["james", "Harrison", "Carrie"],
  },
];
// forEAach
movies.forEach((movie) => console.log(movie.title));
//filter, to ge ta new array of movies tbhat match criteria

// array name DOT array command then arrow function that accepts one singular element of the arryay
const newMovies = movies.filter((element) => element.release > 1990);
console.log(newMovies);

movies
  .filter((movie) => movie.release > 1990)
  .forEach((movie) => console.log(movie));

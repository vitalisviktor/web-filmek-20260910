



const filmek = [
    {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
},
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
      "title": "Up",
      "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
      "title": "Toy Story 3",
      "year": 2010,
      "genre": "Animation",
      "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
},
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
},
{
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
},
{
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
},
{
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
},
{
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
},
{
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
},
  {
      "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
}
];
let tablazat = document.getElementById("tablazat")
let tablerow = document.createElement("tr")

let title = document.createElement("td")
let year = document.createElement("td")
let genre = document.createElement("td")
let rating = document.createElement("td")

title.textContent = "Title"
year.textContent = "Year"
genre.textContent = "Genre"
rating.textContent = "Rating"
tablerow.classList.add("col")
    tablerow.appendChild(title)
    tablerow.appendChild(year)
    tablerow.appendChild(genre)
    tablerow.appendChild(rating)
    tablazat.appendChild(tablerow)

filmek.forEach(e => {

    tablerow = document.createElement("tr")
    //tablerow.classList.add("row")
    let title = document.createElement("td")
    let year = document.createElement("td")
    let genre = document.createElement("td")
    let rating = document.createElement("td")
    title.textContent = e.title

    year.textContent = e.year

    genre.textContent = e.genre

    rating.textContent = e.rating

    tablerow.appendChild(title)
    tablerow.appendChild(year)
    tablerow.appendChild(genre)
    tablerow.appendChild(rating)
    tablazat.appendChild(tablerow)
});

import FilmsAPIService from "./FilmsAPIService.js";
import Card from "./Card.js";

export default async function showOscarWinnersMovies() {
  const oscarWinnersWrapper = document.querySelector(
    ".moremovies__oscarwinners-wrapper"
  );
  const films = new FilmsAPIService();
  const { results } = await films.getOscarWinnersFilms();

  for (let i = 0; i < 5; i++) {
    const card = new Card(
      results[i].image,
      results[i].title,
      results[i].genres,
      results[i].imDbRating,
      results[i].plot
    );

    oscarWinnersWrapper.insertAdjacentHTML(
      "beforeend",
      card.createCardOscarWinners()
    );

    document
      .querySelector(".moremovies__carousel-item-winners")
      .classList.add("active");
  }
}

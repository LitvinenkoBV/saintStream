import FilmsAPIService from "./FilmsAPIService.js";
import Card from "./Card.js";

export default async function showBestPictureMovies() {
  const oscarPictureWrapper = document.querySelector(
    ".moremovies__picture-wrapper"
  );

  const films = new FilmsAPIService();
  const { results } = await films.getBestPictureWinnersFilms();

  for (let i = 1; i < 6; i++) {
    let arr = [];
    let card;
    for (let u = 0; u < 4; u++) {
      card = new Card(
        results[u * i].image,
        results[u * i].title,
        results[u * i].genres,
        "",
        ""
      );
      arr.push(card);
    }

    oscarPictureWrapper.insertAdjacentHTML(
      "beforeend",
      card.createCardPictureNominated(arr)
    );

    document.querySelector(".moremovies__picture-item").classList.add("active");
  }
}

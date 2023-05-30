import FilmsAPIService from "./FilmsAPIService.js";
import Card from "./Card.js";

export default async function showOscarNominatedMovies() {
  const oscarNominatedWrapper = document.querySelector(
    ".moremovies__nominated-wrapper"
  );
  const films = new FilmsAPIService();
  const { results } = await films.getOscarNominatedFilms();

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

    oscarNominatedWrapper.insertAdjacentHTML(
      "beforeend",
      card.createCardOscarNominated(arr)
    );

    document
      .querySelector(".moremovies__nominated-item")
      .classList.add("active");
  }
}

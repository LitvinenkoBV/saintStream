import FilmsAPIService from "./FilmsAPIService.js";
import Card from "./Card.js";
import showCarousel from "./carousel.js";

export default async function showTopMovies() {
  const moviesWrapper = document.querySelector(".movies__wrapper");
  const moviesWrp = document.querySelector(".movies__wrp");
  const prevBtn = ".movies__button-prev";
  const nextBtn = ".movies__button-next";
  const films = new FilmsAPIService();
  const { items } = await films.getTopMovies();

  for (let i = 0; i < 10; i++) {
    const card = new Card(
      items[i].image,
      items[i].title,
      "",
      items[i].imDbRating
    );
    moviesWrapper.insertAdjacentHTML("beforeend", card.createCardTopMovie());
  }
  showCarousel(moviesWrapper, moviesWrp, prevBtn, nextBtn);
}

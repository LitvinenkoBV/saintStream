import FilmsAPIService from "./FilmsAPIService.js";
import Card from "./Card.js";
import showCarousel from "./carousel.js";

export default async function showComingSoonFilms() {
  const comingSoonWrapper = document.querySelector(".comingsoon__wrapper");
  const comingSoonWrp = document.querySelector(".comingsoon__wrp");
  const prevBtn = ".comingsoon__button-prev";
  const nextBtn = ".comingsoon__button-next";
  const films = new FilmsAPIService();
  const { items } = await films.getComingSoonFilms();

  for (let i = 0; i < 10; i++) {
    const card = new Card(items[i].image, items[i].title, items[i].genres, "");
    comingSoonWrapper.insertAdjacentHTML(
      "beforeend",
      card.createCardComingSoon()
    );
  }
  showCarousel(comingSoonWrapper, comingSoonWrp, prevBtn, nextBtn);
}

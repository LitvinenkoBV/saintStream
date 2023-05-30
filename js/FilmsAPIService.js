export default class FilmsAPIService {
  async getComingSoonFilms() {
    const response = await fetch(
      "https://imdb-api.com/en/API/ComingSoon/k_y0r5sui5"
    );
    const films = await response.json();
    return films;
  }
  async getOscarWinnersFilms() {
    const response = await fetch(
      "https://imdb-api.com/API/AdvancedSearch/k_y0r5sui5?groups=oscar_winners"
    );
    const films = await response.json();
    return films;
  }
  async getOscarNominatedFilms() {
    const response = await fetch(
      "https://imdb-api.com/API/AdvancedSearch/k_y0r5sui5?groups=oscar_nominees"
    );
    const films = await response.json();
    return films;
  }
  async getBestPictureWinnersFilms() {
    const response = await fetch(
      "https://imdb-api.com/API/AdvancedSearch/k_y0r5sui5?groups=oscar_best_picture_winners"
    );
    const films = await response.json();
    return films;
  }
  async getTopMovies() {
    const response = await fetch(
      `https://imdb-api.com/en/API/Top250Movies/k_y0r5sui5`
    );
    const films = await response.json();
    return films;
  }
}

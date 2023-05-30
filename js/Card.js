export default class Card {
  constructor(image, title, genres, imDbRating, plot) {
    this.image = image;
    this.title = title;
    this.genres = genres;
    this.imDbRating = imDbRating;
    this.plot = plot;
  }

  createCardComingSoon() {
    return `
    <div class="comingsoon__wrapper-item">
      <a href="#">      
        <img src="${this.image}"/>
        <div class="comingsoon__wrapper-title">${this.title}</div>
        <div class="comingsoon__wrapper-genres">${this.genres}</div>
      </a>
    </div>`;
  }
  createCardTopMovie() {
    return `
    <div class="movies__item">
      <a href="#">      
        <img src="${this.image}"/>
        <div class="movies__title">${this.title}</div>
        <div class="movies__imDbRating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFCD1A" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg> ${this.imDbRating}</div>
      </a>
     </div>
  `;
  }
  createCardOscarWinners() {
    return `
    <div
    class="carousel-item moremovies__carousel-item-winners"
    >
    <img class="d-block w-100" 
      src="${this.image}" 
      alt="First slide" />
    <h5 class="moremovies__carousel-item-winners__heading">
       ${this.title}
    </h5>
    <div class="moremovies__carousel-imDbRating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFCD1A" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg> ${this.imDbRating} | <span class="moremovies__carousel-genres">${this.genres}</span></div>
    <p class="moremovies__carousel-item-winners__text">
      ${this.plot}
    </p>
     <button type="button" class="btn btn-success">
       <i class="bi bi-play-circle"></i> Play now
    </button>
     <button type="button" class="btn btn-outline-light">
       <i class="bi bi-bookmark"></i>
       Add Watchlist
     </button>
     </div>
    `;
  }
  createCardOscarNominated(arr) {
    return `
    <div class="carousel-item moremovies__nominated-item">
    <a href="#">
    <div class="moremovies__carousel-block">

      <div class="moremovies__img-nominated">
        <img
          class="d-block w-100"
          src="${arr[0].image}"
          alt="First slide"
        />
      </div>
      <div class="moremovies__content-nominated">
        <h5 class="moremovies__carousel-title">
          ${arr[0].title}
        </h5>
        <p class="moremovies__carousel-text">
          ${arr[0].genres}
        </p>
      </div>

    </div>
    </a>
    <a href="#">
    <div class="moremovies__carousel-block">

    <div class="moremovies__img-nominated">
      <img
        class="d-block w-100"
        src="${arr[1].image}"
        alt="First slide"
      />
    </div>
    <div class="moremovies__content-nominated">
      <h5 class="moremovies__carousel-title">
        ${arr[1].title}
      </h5>
      <p class="moremovies__carousel-text">
        ${arr[1].genres}
      </p>
    </div>

  </div>
  </a>
  <a href="#">
  <div class="moremovies__carousel-block">

  <div class="moremovies__img-nominated">
    <img
      class="d-block w-100"
      src="${arr[2].image}"
      alt="First slide"
    />
  </div>
  <div class="moremovies__content-nominated">
    <h5 class="moremovies__carousel-title">
      ${arr[2].title}
    </h5>
    <p class="moremovies__carousel-text">
      ${arr[2].genres}
    </p>
  </div>

</div>
</a>
<a href="#">
<div class="moremovies__carousel-block">

<div class="moremovies__img-nominated">
  <img
    class="d-block w-100"
    src="${arr[3].image}"
    alt="First slide"
  />
</div>
<div class="moremovies__content-nominated">
  <h5 class="moremovies__carousel-title">
    ${arr[3].title}
  </h5>
  <p class="moremovies__carousel-text">
    ${arr[3].genres}
  </p>
</div>

</div>
</a>
  </div>
    `;
  }
  createCardPictureNominated(arr) {
    return `
    <div class="carousel-item moremovies__picture-item">
    <a href="#">
    <div class="moremovies__carousel-block">

      <div class="moremovies__img-nominated">
        <img
          class="d-block w-100"
          src="${arr[0].image}"
          alt="First slide"
        />
      </div>
      <div class="moremovies__content-picture">
        <h5 class="moremovies__carousel-title">
          ${arr[0].title}
        </h5>
        <p class="moremovies__carousel-text">
          ${arr[0].genres}
        </p>
      </div>

    </div>
    </a>
    <a href="#">
    <div class="moremovies__carousel-block">

    <div class="moremovies__img-picture">
      <img
        class="d-block w-100"
        src="${arr[1].image}"
        alt="First slide"
      />
    </div>
    <div class="moremovies__content-picture">
      <h5 class="moremovies__carousel-title">
        ${arr[1].title}
      </h5>
      <p class="moremovies__carousel-text">
        ${arr[1].genres}
      </p>
    </div>

  </div>
  </a>
  <a href="#">
  <div class="moremovies__carousel-block">

  <div class="moremovies__img-picture">
    <img
      class="d-block w-100"
      src="${arr[2].image}"
      alt="First slide"
    />
  </div>
  <div class="moremovies__content-picture">
    <h5 class="moremovies__carousel-title">
      ${arr[2].title}
    </h5>
    <p class="moremovies__carousel-text">
      ${arr[2].genres}
    </p>
  </div>

</div>
</a>
<a href="#">
<div class="moremovies__carousel-block">

<div class="moremovies__img-picture">
  <img
    class="d-block w-100"
    src="${arr[3].image}"
    alt="First slide"
  />
</div>
<div class="moremovies__content-picture">
  <h5 class="moremovies__carousel-title">
    ${arr[3].title}
  </h5>
  <p class="moremovies__carousel-text">
    ${arr[3].genres}
  </p>
</div>

</div>
</a>
  </div>
    `;
  }
}

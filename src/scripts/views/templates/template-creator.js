import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="list-item">
    <a href="#/detail/${restaurant.id}">
      <div class="list-thumbnail">    
          <img class="list-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
          <p class="list-city">${restaurant.city}</p>
      </div>
    </a>
    <div class="list-item__content">
        <p class="list-item__restaurant">Rating </p> 
        <p class="post-item__restaurant-rate"><i title="ratings" class="fa fa-star card-rating"></i> ${restaurant.rating}</p>
        
        <h2 class="list-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2>
        <p class="list-item__description">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => (`
  <button aria-label="like this restaurants" id="likeButton" class="like">
     <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`);

const createLikedButtonTemplate = () => (`
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`);

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__wrapper">
    <div class="restaurant-detail__info">
      <img class="restaurant-detail__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <p class="restaurant-detail__about">
        ${restaurant.categories.map((cates) => `
          <span class="restaurant-detail__category">#${cates.name}</span>
        `).join('')}
      </p>
      <p class="restoran-detail__location"><h4>Location : ${restaurant.address}, ${restaurant.city}</h4></p>
      <p class="restoran-detail__description">${restaurant.description}</p>
    </div>
    
    <div class="restaurant__ham">
        <h2>Menu List</h2>
    </div>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
        <h4>Makanan</h4>
        <ul class="restaurant-detail__foods">
          ${restaurant.menus.foods.map((food) => `
            <li>${food.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="drinks">
        <h4>Minuman</h4>
        <ul class="restaurant-detail__drinks">
          ${restaurant.menus.drinks.map((drink) => `
            <li>${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>

    <div class="restaurant__ham">
        <h2>Review Customer</h2>
    </div>
    <div class="restaurant-detail__review">
      ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <p class="customer-review-date">${customer.date}</p>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

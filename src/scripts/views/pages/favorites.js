import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <section class="content" id="content">
        <div class="card">
            <h2 class="card__label">Favorite Restaurants</h2>
            <div class="lists" id="lists">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.lists');
    const mainContainer = document.querySelector('#maincontent');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
          <div>
            <p>No Favorite Restaurant added</p>
          </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;

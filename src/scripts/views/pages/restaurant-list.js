import RestaurantSource from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <section class="content" id="content">
        <div class="card">
            <h2 class="card__label">Explore Restaurants</h2>
            <div class="lists" id="lists">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.lists');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;

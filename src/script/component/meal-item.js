class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .meal-thumb {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }

        .meal-info {
          padding: 24px;
        }

        .meal-info > h2 {
          font-weight: lighter;
        }
        .meal-info > ul {
          margin-left: 20px;
          margin-top: 10px;
        }

        .meal-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
    </style>

    <img class="meal-thumb" src="${this._meal.strMealThumb}" alt="Meal Thumb">
    <div class="meal-info">
        <h2>${this._meal.strMeal}</h2>
        <p>Ingredients:</p>
        <ul>
          <li>${this._meal.strMeasure1} ${this._meal.strIngredient1}</li>
          <li>${this._meal.strMeasure2} ${this._meal.strIngredient2}</li>
          <li>${this._meal.strMeasure3} ${this._meal.strIngredient3}</li>
          <li>${this._meal.strMeasure4} ${this._meal.strIngredient4}</li>
          <li>${this._meal.strMeasure5} ${this._meal.strIngredient5}</li>
        </ul>
        <p>Instructions:</p>
        <p>${this._meal.strInstructions}</p>
    </div>`;
  }
}

customElements.define('meal-item', MealItem);

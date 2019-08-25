import mockAxios from 'axios';
import { getMealSuggestionsForMainIngredient } from "../../axios/MealService";
import { FILTER } from '../../axios/urlConstants';

const spaghettiResponse = {
  data: {
    "meals": [
      {
        "strMeal": "Pilchard puttanesca",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
        "idMeal": "52837"
      },
      {
        "strMeal": "Spaghetti Bolognese",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        "idMeal": "52770"
      }
    ]
  }
};

describe("meal service", () => {

  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("request meals for main ingredient 'stone' should return no meal", async () => {
    const result = await getMealSuggestionsForMainIngredient("stone");

    expect(result).toEqual([]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(FILTER, {params: {i: 'stone'}});
  })

  it("request meals for main ingredient 'spaghetti' should return two meals", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(spaghettiResponse)
    );

    const result = await getMealSuggestionsForMainIngredient("spaghetti");

    expect(result).toEqual(spaghettiResponse.data.meals);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(FILTER, {params: {i: 'spaghetti'}});
  });
});

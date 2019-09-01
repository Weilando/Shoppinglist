import mockAxios from 'axios';
import { getMealSuggestionsFor, formatName } from "../../services/MealService";
import { FILTER } from '../../constants/urlConstants';

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

describe("MealService fetch", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("request meals for main ingredient 'stone' should return no meal", async () => {
    const result = await getMealSuggestionsFor("stone");

    expect(result).toEqual([]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(FILTER, {params: {i: 'stone'}});
  });

  it("request meals for main ingredient 'spaghetti' should return two meals", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(spaghettiResponse)
    );

    const result = await getMealSuggestionsFor("spaghetti");

    expect(result).toEqual(spaghettiResponse.data.meals);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(FILTER, {params: {i: 'spaghetti'}});
  });
});

describe('MealService formatName', () => {
  it('should replace whitespace by underscore', () => {
    expect(formatName(' asdf 42 ')).toBe('_asdf_42_');
  });

  it('should transform name to lowercase', () => {
    expect(formatName('aSDf')).toBe('asdf');
  });

  it('should transform name to lowercase and replace whitespace by underscore', () => {
    expect(formatName(' aSDf 42 ')).toBe('_asdf_42_');
  });
});

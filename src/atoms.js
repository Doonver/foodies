import { atom } from 'jotai';
export const currUserAtom = atom('');
export const icrAtom = atom(0);
export const currPageAtom = atom('Home');
export const pantryItemsAtom = atom(['apples', 'flour', 'sugar']);
export const recipesAtom = atom([{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 30,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 9,
    "healthScore": 20,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 646.43,
    "id": 661531,
    "title": "Steak with lemon and capers",
    "readyInMinutes": 45,
    "servings": 2,
    "sourceUrl": "http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers",
    "image": "https://img.spoonacular.com/recipes/661531-312x231.jpg",
    "imageType": "jpg",
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 949.39,
                "unit": "kcal",
                "percentOfDailyNeeds": 47.47
            },
            {
                "name": "Fat",
                "amount": 54.35,
                "unit": "g",
                "percentOfDailyNeeds": 83.62
            },
            {
                "name": "Saturated Fat",
                "amount": 21.83,
                "unit": "g",
                "percentOfDailyNeeds": 136.45
            },
            {
                "name": "Carbohydrates",
                "amount": 51.89,
                "unit": "g",
                "percentOfDailyNeeds": 17.3
            },
            {
                "name": "Net Carbohydrates",
                "amount": 49.76,
                "unit": "g",
                "percentOfDailyNeeds": 18.09
            },
            {
                "name": "Sugar",
                "amount": 1.2,
                "unit": "g",
                "percentOfDailyNeeds": 1.33
            },
            {
                "name": "Cholesterol",
                "amount": 152.1,
                "unit": "mg",
                "percentOfDailyNeeds": 50.7
            },
            {
                "name": "Sodium",
                "amount": 1310.9,
                "unit": "mg",
                "percentOfDailyNeeds": 57
            },
            {
                "name": "Alcohol",
                "amount": 9.27,
                "unit": "g",
                "percentOfDailyNeeds": 51.5
            },
            {
                "name": "Protein",
                "amount": 47.32,
                "unit": "g",
                "percentOfDailyNeeds": 94.64
            },
            {
                "name": "Selenium",
                "amount": 70.77,
                "unit": "µg",
                "percentOfDailyNeeds": 101.1
            },
            {
                "name": "Zinc",
                "amount": 10.89,
                "unit": "mg",
                "percentOfDailyNeeds": 72.59
            },
            {
                "name": "Vitamin B3",
                "amount": 13.67,
                "unit": "mg",
                "percentOfDailyNeeds": 68.35
            },
            {
                "name": "Vitamin B12",
                "amount": 3.34,
                "unit": "µg",
                "percentOfDailyNeeds": 55.73
            },
            {
                "name": "Vitamin B2",
                "amount": 0.82,
                "unit": "mg",
                "percentOfDailyNeeds": 48.32
            },
            {
                "name": "Vitamin B6",
                "amount": 0.91,
                "unit": "mg",
                "percentOfDailyNeeds": 45.64
            },
            {
                "name": "Vitamin B1",
                "amount": 0.68,
                "unit": "mg",
                "percentOfDailyNeeds": 45.38
            },
            {
                "name": "Iron",
                "amount": 6.9,
                "unit": "mg",
                "percentOfDailyNeeds": 38.36
            },
            {
                "name": "Phosphorus",
                "amount": 381.32,
                "unit": "mg",
                "percentOfDailyNeeds": 38.13
            },
            {
                "name": "Manganese",
                "amount": 0.62,
                "unit": "mg",
                "percentOfDailyNeeds": 31.17
            },
            {
                "name": "Folate",
                "amount": 124.57,
                "unit": "µg",
                "percentOfDailyNeeds": 31.14
            },
            {
                "name": "Potassium",
                "amount": 693.76,
                "unit": "mg",
                "percentOfDailyNeeds": 19.82
            },
            {
                "name": "Magnesium",
                "amount": 69.35,
                "unit": "mg",
                "percentOfDailyNeeds": 17.34
            },
            {
                "name": "Vitamin E",
                "amount": 2.47,
                "unit": "mg",
                "percentOfDailyNeeds": 16.43
            },
            {
                "name": "Vitamin K",
                "amount": 17.17,
                "unit": "µg",
                "percentOfDailyNeeds": 16.35
            },
            {
                "name": "Copper",
                "amount": 0.3,
                "unit": "mg",
                "percentOfDailyNeeds": 14.78
            },
            {
                "name": "Fiber",
                "amount": 2.13,
                "unit": "g",
                "percentOfDailyNeeds": 8.51
            },
            {
                "name": "Vitamin A",
                "amount": 402.16,
                "unit": "IU",
                "percentOfDailyNeeds": 8.04
            },
            {
                "name": "Calcium",
                "amount": 46.04,
                "unit": "mg",
                "percentOfDailyNeeds": 4.6
            },
            {
                "name": "Vitamin B5",
                "amount": 0.36,
                "unit": "mg",
                "percentOfDailyNeeds": 3.59
            },
            {
                "name": "Vitamin C",
                "amount": 2.94,
                "unit": "mg",
                "percentOfDailyNeeds": 3.56
            },
            {
                "name": "Vitamin D",
                "amount": 0.2,
                "unit": "µg",
                "percentOfDailyNeeds": 1.33
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 129.75,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 35.19,
                "unit": ""
            },
            {
                "name": "Inflammation Score",
                "amount": -8,
                "unit": ""
            },
            {
                "name": "Nutrition Score",
                "amount": 29.963478260869564,
                "unit": "%"
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Petunidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Delphinidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Malvidin",
                "amount": 0.05,
                "unit": "mg"
            },
            {
                "name": "Pelargonidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Peonidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Catechin",
                "amount": 0.69,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epicatechin",
                "amount": 0.5,
                "unit": "mg"
            },
            {
                "name": "Epicatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Theaflavin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Thearubigins",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Eriodictyol",
                "amount": 0.34,
                "unit": "mg"
            },
            {
                "name": "Hesperetin",
                "amount": 1,
                "unit": "mg"
            },
            {
                "name": "Naringenin",
                "amount": 0.38,
                "unit": "mg"
            },
            {
                "name": "Apigenin",
                "amount": 0.23,
                "unit": "mg"
            },
            {
                "name": "Luteolin",
                "amount": 0.04,
                "unit": "mg"
            },
            {
                "name": "Isorhamnetin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Kaempferol",
                "amount": 11.31,
                "unit": "mg"
            },
            {
                "name": "Myricetin",
                "amount": 0.08,
                "unit": "mg"
            },
            {
                "name": "Quercetin",
                "amount": 14.95,
                "unit": "mg"
            },
            {
                "name": "Theaflavin-3,3'-digallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3'-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Gallocatechin",
                "amount": 0,
                "unit": "mg"
            }
        ],
        "ingredients": [
            {
                "id": 23232,
                "name": "beef steak",
                "amount": 200,
                "unit": "g",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 40.24,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 28.28,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 104,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 3.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 12.58,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 288,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 3,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.18,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 536,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 30,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Folate",
                        "amount": 6,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 122,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 3.32,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.48,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 9.79,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.2,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Selenium",
                        "amount": 48.8,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 1.38,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 13.55,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 10.26,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Calories",
                        "amount": 416,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    }
                ]
            },
            {
                "id": 1001,
                "name": "butter",
                "amount": 1,
                "unit": "tablespoons",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.12,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 11.35,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 90.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.39,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 7.2,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 3.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.98,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0.46,
                        "unit": "g",
                        "percentOfDailyNeeds": 4589.2
                    },
                    {
                        "name": "Potassium",
                        "amount": 3.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 349.86,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 30.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.42,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.14,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.43,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 2.94,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 100.38,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 3.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 2.63,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 2054,
                "name": "capers",
                "amount": 1,
                "unit": "Tbs",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.2,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 238.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.86,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 2.12,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 3.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 11.87,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 1.98,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 2.84,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.28,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.1,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 1.98,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.42,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 3.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.56,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 14106,
                "name": "wine",
                "amount": 0.38,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 4.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.24,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.86,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Fluoride",
                        "amount": 181.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 16.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.36,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 63.9,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.9,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Magnesium",
                        "amount": 9,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Alcohol",
                        "amount": 9.27,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.09,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 2.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 73.8,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 2.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 8.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 3.87,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 20081,
                "name": "flour",
                "amount": 0.5,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 6.46,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0.61,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 1.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 2.9,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 67.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.19,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 96.25,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.49,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 66.88,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 114.38,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.27,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 13.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.31,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 3.69,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 1.69,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.43,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 21.19,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.26,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 46.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 227.5,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 47.69,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 9.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 6.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 11215,
                "name": "garlic",
                "amount": 1,
                "unit": "large cloves",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.19,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.51,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 4.59,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 12.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.27,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.09,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.94,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.43,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.93,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 4.47,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.99,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 5.43,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.7,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 1002030,
                "name": "ground pepper",
                "amount": 0.13,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0.05,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.4,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.41,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 4589.2
                    },
                    {
                        "name": "Potassium",
                        "amount": 3.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 1.37,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.04,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.43,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 0.63,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 1.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 9152,
                "name": "lemon juice",
                "amount": 0.5,
                "unit": "teaspoon",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 4589.2
                    },
                    {
                        "name": "Potassium",
                        "amount": 2.58,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.15,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.5,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.97,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 0.55,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.17,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 1029150,
                "name": "lemon wedges",
                "amount": 1,
                "unit": "servings",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 1.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.22,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.11,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.53,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 0.29,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.09,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.26,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 4053,
                "name": "olive oil",
                "amount": 1,
                "unit": "Tbs",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 14,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.28,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 2.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 1.93,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 8.43,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 1.47,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 10.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 123.76,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 11297,
                "name": "parsley",
                "amount": 1,
                "unit": "teaspoons",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 1.64,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.55,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 8.42,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0.15,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 0.04,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            },
            {
                "id": 2047,
                "name": "salt",
                "amount": 0.38,
                "unit": "tsp",
                "nutrients": [
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 94.64
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 83.62
                    },
                    {
                        "name": "Sodium",
                        "amount": 872.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 57
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.36
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 38.13
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.18,
                        "unit": "mg",
                        "percentOfDailyNeeds": 19.82
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 8.04
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 50.7
                    },
                    {
                        "name": "Folate",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 31.14
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.59
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 55.73
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 48.32
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 17.34
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 51.5
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.56
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 68.35
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 45.64
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 8.51
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.33
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.17
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 101.1
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 72.59
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "name": "Calories",
                        "amount": 0,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 47.47
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 14.78
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.3
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.54,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.6
                    },
                    {
                        "name": "Choline",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    }
                ]
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 21.36,
            "percentFat": 55.21,
            "percentCarbs": 23.43
        },
        "weightPerServing": {
            "amount": 398,
            "unit": "g"
        }
    },
    "summary": "You can never have too many main course recipes, so give Steak with lemon and capers a try. One serving contains <b>949 calories</b>, <b>47g of protein</b>, and <b>54g of fat</b>. For <b>$6.46 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. This recipe is liked by 9 foodies and cooks. <b>valentin day</b> will be even more special with this recipe. Head to the store and pick up beef steak, wine, capers, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 71%</b>, this dish is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/steak-salad-sandwiches-with-capers-30072\">Steak Salad Sandwiches with Capers</a>, <a href=\"https://spoonacular.com/recipes/steak-salad-with-arugula-parmesan-crispy-capers-8826\">Steak Salad With Arugula, Parmesan & Crispy Capers</a>, and <a href=\"https://spoonacular.com/recipes/veal-with-lemon-and-capers-754915\">Veal with Lemon and Capers</a>.",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [],
    "occasions": [
        "valentine's day",
        "father's day"
    ],
    "spoonacularScore": 72.90178680419922,
    "spoonacularSourceUrl": "https://spoonacular.com/steak-with-lemon-and-capers-661531"
}]);
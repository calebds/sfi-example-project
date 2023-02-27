import { Recipe, Ingredient } from "../types/types";
import Jabber from "jabber";

// Random data sources.
import titles from "./titles.json";
import ingredients from "./ingredients.json";
import tags from "./tags.json";

/* This file is a module for generating random recipes. */

// Max number of recipes to generate on initialization.
const maxRecipes = 50;

// Millis since year 2000 to present, floor/ceiling for random publish dates.
const mse2000 = 946713600000;
const maxMse = new Date().getTime();

// Possible colors for random images.
const colorPallete = [
  'edd4b2',
  'd0a98f',
  'cac2b5',
  'ecdcc9'
];

// Possible ingredient units.
const units = [
  '',
  'tsp',
  'tbsp',
  'fl oz',
  'cups',
  'pints',
  'quarts',
  'gallons'
];

// Library for random text and name genration, with food-related theme words.
const jabber = new Jabber(ingredients.ingredients);

// Capitalize first letter of a string.
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Selects a random ingredient.
function getRandomIngredientName(): string {
  return getRandomItemFromArray(ingredients.ingredients);
}

// Selects a random recipe title.
function getRandomRecipeTitle(): string {
  return getRandomItemFromArray(titles.titles);
}

// Gets a random integer up to specified value.
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

// Gets a random item from any array.
function getRandomItemFromArray(arr: any[]): any {
  return arr[getRandomInt(arr.length - 1)];
}

// Generates a URL to a randomly colors image of given size, with text.
function getRandomTextImageBySize(size: string, text: string): string {
  const color = getRandomItemFromArray(colorPallete);
  return `https://via.placeholder.com/${size}/${color}/FFFFFF?text=${text}`;
}

// Gets a random date string since the year 2000.
function getRandomDateSince2000() {
  const offsetMse = getRandomInt(maxMse - mse2000);
  const date = new Date(offsetMse + mse2000);
  const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return dateStr;
}

// Generates a random Ingredient object.
function generateRandomIngredient(): Ingredient {
  return {
    name: getRandomIngredientName(),
    quantity: getRandomInt(19) + 1, // avoid zero
    unit: getRandomItemFromArray(units)
  }
}

// Generates a list of random ingredients, up to a given number.
function generateRandomIngredients(max: number): Ingredient[] {
  const ingredientsList = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    ingredientsList.push(generateRandomIngredient());
  }
  return ingredientsList;
}

// Generates a list of random food-related tags, up to a given number.
function generateRandomTags(max: number): string[] {
  const tagList = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    tagList.push(capitalizeFirstLetter(getRandomItemFromArray(tags.tags)));
  }
  return tagList;
}

// Generates up to a number of specified random food-related paragraphs.
function generateRandomParagraphs(max: number): string {
  const paragraphs = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    paragraphs.push(jabber.createParagraph(getRandomInt(50) + 1));
  }
  return paragraphs.join('\n\n');
}

// Generates a random Recipe object.
export function generateRandomRecipe(): Recipe {
  const title = getRandomRecipeTitle();
  const slug = title.replace(/\s+/g, '-').toLowerCase();
  const image = getRandomTextImageBySize('800x600', title);
  const previewImage = getRandomTextImageBySize('100', title);
  const authorName = jabber.createFullName(false); // disable salutation
  const publishDate = getRandomDateSince2000();
  const intro = generateRandomParagraphs(5);
  const ingredients = generateRandomIngredients(15);
  const instructions = generateRandomParagraphs(7);
  const tags = generateRandomTags(5);
  return {
    title: title,
    image: image,
    slug: slug,
    previewImage: previewImage,
    authorName: authorName,
    publishDate: publishDate,
    intro: intro,
    ingredients: ingredients,
    instructions: instructions,
    tags: tags
  };
}

// Generates up to a number of random Recipe objects.
function generateRandomRecipes(max: number): Recipe[] {
  const recipes = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    recipes.push(generateRandomRecipe());
  }
  return recipes;
}

// API to get a list of random Recipes.
export function getAllRecipes(): Recipe[] {
  return generateRandomRecipes(maxRecipes);
}
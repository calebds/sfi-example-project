import { Recipe, Ingredient } from "../types/types";
import titles from "./titles.json";
import ingredients from "./ingredients.json";
import tags from "./tags.json";
import Jabber from "jabber";

const maxRecipes = 50;

const mse2000 = 946713600000;
const maxMse = new Date().getTime();

const colorPallete = [
  'edd4b2',
  'd0a98f',
  'cac2b5',
  'ecdcc9'
];

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

const jabber = new Jabber(ingredients.ingredients);

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomIngredientName(): string {
  return getRandomItemFromArray(ingredients.ingredients);
}

function getRandomRecipeTitle(): string {
  return getRandomItemFromArray(titles.titles);
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomItemFromArray(arr: any[]): any {
  return arr[getRandomInt(arr.length - 1)];
}

function getRandomTextImageBySize(size: string, text: string): string {
  const color = getRandomItemFromArray(colorPallete);
  return `https://via.placeholder.com/${size}/${color}/FFFFFF?text=${text}`;
}

function getRandomDateSince2000() {
  const offsetMse = getRandomInt(maxMse - mse2000);
  const date = new Date(offsetMse + mse2000);
  const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return dateStr;
}

function generateRandomIngredient(): Ingredient {
  return {
    name: getRandomIngredientName(),
    quantity: getRandomInt(19) + 1, // avoid zero
    unit: getRandomItemFromArray(units)
  }
}

function generateRandomIngredients(max: number): Ingredient[] {
  const ingredientsList = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    ingredientsList.push(generateRandomIngredient());
  }
  return ingredientsList;
}

function generateRandomTags(max: number): string[] {
  const tagList = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    tagList.push(capitalizeFirstLetter(getRandomItemFromArray(tags.tags)));
  }
  return tagList;
}

function generateRandomParagraphs(max: number): string {
  const paragraphs = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    paragraphs.push(jabber.createParagraph(getRandomInt(50) + 1));
  }
  return paragraphs.join('\n\n');
}

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

function generateRandomRecipes(max: number): Recipe[] {
  const recipes = [];
  const num = getRandomInt(max) + 1;
  for (let i = 0; i < num; i++) {
    recipes.push(generateRandomRecipe());
  }
  return recipes;
}

export function getAllRecipes(): Recipe[] {
  return generateRandomRecipes(maxRecipes);
}
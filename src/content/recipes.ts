import { Recipe, Ingredient } from "../types/types";
import titles from "./titles.json";
import ingredients from "./ingredients.json";
import tags from "./tags.json";
import Jabber from "jabber";

const maxRecipes = 10;

const mse2000 = 946713600000;
const maxMse = new Date().getTime();

const colorPallete = [
  'edd4b2ff',
  'd0a98fff',
  '4d243dff',
  'cac2b5ff',
  'ecdcc9ff'
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
  return new Date(offsetMse + mse2000);
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
  for (let i = 0; i < getRandomInt(max + 1); i++) {
    ingredientsList.push(generateRandomIngredient());
  }
  return ingredientsList;
}

function generateRandomTags(max: number): string[] {
  const tagList = [];
  for (let i = 0; i < getRandomInt(max + 1); i++) {
    tagList.push(getRandomItemFromArray(tags.tags));
  }
  return tagList;
}

function generateRandomRecipe(): Recipe {
  const title = getRandomRecipeTitle();
  const slug = title.replace(/\s+/g, '-').toLowerCase();
  const image = getRandomTextImageBySize('400x300', title);
  const previewImage = getRandomTextImageBySize('150', title);
  const authorName = jabber.createFullName(false); // disable salutation
  const publishDate = getRandomDateSince2000();
  const intro = jabber.createParagraph(30);
  const ingredients = generateRandomIngredients(10);
  const instructions = jabber.createParagraph(30);
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
  for (let i = 0; i < getRandomInt(max + 1); i++) {
    recipes.push(generateRandomRecipe());
  }
  return recipes;
}

export function getRecipeBySlug(slug: string): Recipe {
  return generateRandomRecipe();
}

export function getAllRecipes(): Recipe[] {
  return generateRandomRecipes(10);
}
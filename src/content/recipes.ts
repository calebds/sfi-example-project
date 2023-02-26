import { Recipe } from "../types/types";
import titles from "./titles.json";
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

const jabber = new Jabber();

function getRandomRecipeTitle(): string {
  // 427 is number of random title options
  return titles.titles[getRandomInt(427)];
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
function generateRandomRecipe(): Recipe {
  const title = getRandomRecipeTitle();
  const slug = title.replace(/\s+/g, '-').toLowerCase();
  const image = getRandomTextImageBySize('400x300', title);
  const previewImage = getRandomTextImageBySize('150', title);
  const authorName = jabber.createFullName(false); // no salutation
  const publishDate = getRandomDateSince2000();
  const intro = jabber.createParagraph(30);
  const ingredients = [
    {
      name: 'Chicken',
      quantity: 1,
      unit: 'lb'
    }
  ]; // TODO
  const instructions = jabber.createParagraph(30);
  const tags = ['spicy', 'indian']; // TODO
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
  for (let i = 0; i < max; i++) {
    recipes.push(generateRandomRecipe());
  }
  return recipes;
}

export const defaultRecipe = {
  title: 'Rehydrated Chicken Curry',
  slug: 'rehydrated-chicken-curry',
  image: 'https://via.placeholder.com/400/FF0000/FFFFFF?text=Rehydrated%20Chicken%20Curry',
  previewImage: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Rehydrated%20Chicken%20Curry',
  authorName: 'Caleb Sotelo',
  publishDate: new Date(),
  intro: 'A long time ago...',
  ingredients: [
    {
      name: 'Chicken',
      quantity: 1,
      unit: 'lb'
    }
  ],
  instructions: 'This is how to make __rehydrated chicken curry__!',
  tags: ['spicy', 'indian']
};

export function getRecipeBySlug(slug: string): Recipe {
  return generateRandomRecipe();
}

export function getAllRecipes(): Recipe[] {
  return generateRandomRecipes(10);
}
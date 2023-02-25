import { Recipe } from "../types/types";

export function getRecipeBySlug(slug: string): Recipe {
  return {
    title: 'Rehydrated Chicken Curry',
    slug: 'rehydrated-chicken-curry',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Rehydrated%20Chicken%20Curry',
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
}

export function getAllRecipes(): Recipe[] {
  return [
    {
      title: 'Rehydrated Chicken Curry',
      slug: 'rehydrated-chicken-curry',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Rehydrated%20Chicken%20Curry',
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
    },
    {
      title: 'Rehydrated Chicken Curry',
      slug: 'rehydrated-chicken-curry',
      image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Rehydrated%20Chicken%20Curry',
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
    }
  ];
}
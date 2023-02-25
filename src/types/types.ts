export type Recipe = {
  title: string
  slug: string
  image: string
  authorName: string
  publishDate: Date
  intro: string
  ingredients: Ingredient[]
  instructions: string
  tags: string[]
};

export type Ingredient = {
  name: string
  quantity: number
  unit: string
};

export type User = {
  name: string
  bookmarks: string[]
  scaleFactors: { [key: string]: number }
};
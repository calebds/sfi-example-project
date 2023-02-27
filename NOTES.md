## TODO
coding
- bookmarks
- stylize
- filter
- scaling
- cleanup
- code format

presentation
- add diagrams to here
- describe project structure
- add link to this doc in README

## Data model

Recipe
- *title: string
- *slug: string
- image: string (url)
- authorName: string
- publishDate: Date
- intro: string (md)
- ingredients: Ingredient[]
- instructions: string (md)
- tags: string[]

Ingredient
- name: string
- quantity: number
- unit: string

User
- name: string
- bookmarks: string[] (slugs)
- scales: { [key: string]: number; } (key = recipe slug)

## Pages

Home
- `/`
- List of recipes
- Filter / search

Recipe
- `/[slug]`
- Recipe detail
- Quantity multiplier

## How I'd bootstrap a project like this

- use next + TS
- use yarn

## Approach
- use tailwind for rapid prototyping

## Devops

- dev.sh runs application in a Docker Node env

## Data sources
- https://englishstudyhere-com.cdn.ampproject.org/c/s/englishstudyhere.com/grammar/adjectives/food-adjectives-list-of-food-adjectives/amp/
- https://github.com/schollz/food-identicon/blob/master/ingredients.txt
- https://github.com/dpapathanasiou/recipes
- https://github.com/dejavu1987/jabber
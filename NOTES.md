## TODO
coding
- add types
- content engine
- render all content and components
- login
- bookmarks
- scaling
- stylize
- cleanup

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
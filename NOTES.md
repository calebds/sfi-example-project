## About

Live demo: https://entropizer.calebds.dev

- Cool features
  - Mobile-friendly responsive design
  - Customizable random recipe generator
- Design Process
  - [UX wireframes](https://drive.google.com/file/d/1pOgbSXbPwX7bsYZtMwsLaZoKTYr_KTly/view?usp=sharing)
  - Pages
    - `/` - home
    - `/recipe/:slug` - Recipe detail page
  - [Component diagrams](https://docs.google.com/presentation/d/1a7bsjx7QPOEvrrmIchEWJd6rpAe5lsPouJADmcMwwIw/edit?usp=sharing)
  - [Data Model](#data-model)
- Technical Design
  - Added TypeScript support
  - Redux Toolkit for state management
  - React Router DOM for routing
  - Styles
    - MUI React for AppBar, text inputs, icons.
    - TailwindCSS for rapid prototyping
- Project Structure
  - `/app` - app state
  - `/components` - custom react components
  - `/content` - random recipe engine
  - `/types` - type definition
- Devops
  - Uses Docker for development environment (dev.sh)
  - Hosted in a Google Cloud Storage behind Cloudflare DNS
- Data sources for random recipe engine
  - [Food adjectives for tags](https://englishstudyhere-com.cdn.ampproject.org/c/s/englishstudyhere.com/grammar/adjectives/food-adjectives-list-of-food-adjectives/amp/)
  - [Ingredients](https://github.com/schollz/food-identicon/blob/master/ingredients.txt)
  - [Recipe titles (sampled)](https://github.com/dpapathanasiou/recipes)
  - [Lorem Ipsum, names, customized with theme words](https://github.com/dejavu1987/jabber)
  - [Placeholder iages](https://www.placeholder.com/)

## TODO
- style modal
- code format & cleanup

- use gradient
- scale ingredients
- add tests

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

Auth
- name: string
- isAuthenticated: boolean

ScaleSlice
- scales: { [key: string]: number; } (key = recipe slug)

## How I'd bootstrap a project like this
- use next + TS
- use yarn
- deploy on Vercel

## Feedback
- minor typo fixes submitted to README.md
- description is very broad, many degrees of freedom, I would reduce what is _required_ and make it more precise, so that it's feasible to do in 1-2 days
- consider adding a hosting requirement to check devops / infra abilities
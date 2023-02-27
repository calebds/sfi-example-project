[Click here for implementation notes](./NOTES.md)

# SFI Example Project
This project is an opportunity for you to demonstrate your technical knowledge, problem solving methods and coding style. If you don't finish all of the features, that's OK and even expected. Prioritize what you think is most important. 

## Project planning
It is useful to do some diagrams of the project structure both for your own development and for the project walkthrough you'll do with us. We recommend using draw.io or similar app to create some simple diagrams of the app design, component relationships, etc. 

## Project Structure and Code Style
Show us your style! Also feel free to add to the top of this readme with any documentation or notes about your implementation. 

We would also love to see the way you divide this problem into its logical pieces, and how you organize the app components accordingly. A process like https://bradfrost.com/blog/post/atomic-web-design/ is useful for this, though feel free to use any other organizational schema that you are used to. 

# Recipe Application
Create an application to store cooking recipes. While a full authentication system is not needed, you may use one if you like. At the very least, the user should be able to "sign in" with their name, and that name should be stored in state for use in the application. 

## Recipe Specs
Each recipe should have the following content:
* An image for the recipe
* the name of the author
* the date of publication
* An introductory paragraph
* A list of ingredients with measurement amounts
* cooking instructions
* a list of tags that identify the cuisine style

Recipe ingredients should be relational, such that recipes can be filtered/browsed by ingredient. MUI provides many useful components to achieve this, such as https://mui.com/material-ui/react-select/#multiple-select or https://mui.com/x/react-data-grid/ 

You can choose to store your recipes however you like, we recommend using a simple json file but if you'd like to integrate SQLite you may do so.

## User Actions
In a real version of this application, we would need to provide content creators with the ability to create recipe posts, but we will assume that is already done and will just build the presentation view for the reader. Readers should be able to take some actions with recipes:
* A reader should be able to favorite a recipe and have their favorites listed in an account profile page or other appropriate area of the app. 
* A reader should be able to double or half the ingredient amounts listed, so that they can scale recipe servings up or down.
* this doubling/halving setting should save with the bookmark state.

## Technical and Package Requirements
### State Management
You should use a state management package for storing user state. Use either https://redux-toolkit.js.org/ or React Context for state management. At a minimum, the state should store the user's name and their bookmarks. There may be other values you find useful to store there as well. 

## UI
Use the MUI library for your components https://mui.com/

## Design Palette
* use https://fonts.google.com/specimen/Open+Sans for body text and a header font of your choosing for titles and nav. You may create a brand of your choosing as well. 

* Leverage the icons found in the MUI library for iconography.

* use the following Color Palette in your design
```scss
/* CSS HEX */
--wheat: #edd4b2ff;
--tan: #d0a98fff;
--violet-jtc: #4d243dff;
--dun: #cac2b5ff;
--almond: #ecdcc9ff;

/* CSS HSL */
--wheat: hsla(35, 62%, 81%, 1);
--tan: hsla(24, 41%, 69%, 1);
--violet-jtc: hsla(323, 36%, 22%, 1);
--dun: hsla(37, 17%, 75%, 1);
--almond: hsla(33, 48%, 86%, 1);

/* SCSS HEX */
$wheat: #edd4b2ff;
$tan: #d0a98fff;
$violet-jtc: #4d243dff;
$dun: #cac2b5ff;
$almond: #ecdcc9ff;

/* SCSS HSL */
$wheat: hsla(35, 62%, 81%, 1);
$tan: hsla(24, 41%, 69%, 1);
$violet-jtc: hsla(323, 36%, 22%, 1);
$dun: hsla(37, 17%, 75%, 1);
$almond: hsla(33, 48%, 86%, 1);

/* SCSS RGB */
$wheat: rgba(237, 212, 178, 1);
$tan: rgba(208, 169, 143, 1);
$violet-jtc: rgba(77, 36, 61, 1);
$dun: rgba(202, 194, 181, 1);
$almond: rgba(236, 220, 201, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-right: linear-gradient(90deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-bottom: linear-gradient(180deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-left: linear-gradient(270deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-top-right: linear-gradient(45deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-bottom-right: linear-gradient(135deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-top-left: linear-gradient(225deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-bottom-left: linear-gradient(315deg, #edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
$gradient-radial: radial-gradient(#edd4b2ff, #d0a98fff, #4d243dff, #cac2b5ff, #ecdcc9ff);
```


## Bonus Features
If you find this project was too easy, please add some bonus features! Ideas for bonus features:
 * Ability to download your bookmarked recipes as PDFs
 * Recipe Sharing
 * Recipe Creation UI page
 * Recipe Comments
 * Recipe User Ratings

Feel free to come up with your own if you like. Have fun with it! Reach out to us at any time if you'd like more details or have any questions about what to do. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

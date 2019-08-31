# Shoppinglist

This project helps me to refresh and improve my React skills.
I build a simple shopping list, using React and Redux.
Axios and TheMealDB's API are utilized to fetch meal suggestions for main ingredient from the shopping list.
Jest is used to test my services, as well as Redux actions and reducers.
Furthermore Jest performs snapshot tests on React components.

Of course there are several similar projects all over the place, but I just want to practice.
The project should not be seen as a prototype etc.!

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Features

- add, update and delete entries
  - the shopping list's last entry acts as input field for new entries
  - edit mode can be used to alter entries' contents
  - edit mode can be used to delete single entries (both hitting the remove-button or clearing the textfield are possible to do so)
- entries have status "open" or "done", shown by different styles
  - simply click on an entry in display mode to toggle its status
- info-box below shows counters for existing and done entries
- meal-suggestion-box shows up to ten meals, which fit to entries from the shopping list
  - the list updates on every added or updated (i.e. submitted) entry
  - TheMealDB's API is used to offer suggestions for main ingredients from the shopping list
  - simply click on the external hyperlinks to get more information on the shown dishes (information, photos and recipes are provided by TheMealDB)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

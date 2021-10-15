![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello World- React-Rails Project

> This app is built using the <i>webpacker</i> and <i>react-rails</i> gems. This app is for learning purposes only, to understand how to build a Rails app integated with React and Redux.
The app loads a different greeting message every time you reload the page. The controller gets the message from a query made to a local PostgreSQL db.

  
By now you've used many different gems with Rails and this exercise will have you connect previous knowledge with new knowledge as you get a chance to use the react-rails gem. This gem allows you to build React components as a part of your Rails JavaScript and serve it in a component, react_component, to be used in a regular ERB file. [Find project specifications here](https://github.com/microverseinc/curriculum-rails/blob/main/connect-frontend-frameworks/hello_world_with_react.md)
      

<div align="center">

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/errea/Hello-world-rails-react)
[![Github Issues](https://img.shields.io/badge/Github%20-Issues-red)](https://github.com/errea/Hello-world-rails-react/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/errea/Hello-world-rails-react/pull/1)

</div>

## 📝 Contents

<p align="center">
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#gs">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Author</a>
</p>

># [Description]
Create a new Rails app called 'hello-rails-react'.
Initialize your project with Git.
Set up your project with webpacker the react-rails gems as describe in the previous lesson's tutorial.
Make sure that your project has a Postgres database set up.
Create a table for storing your messages and create 5 different greetings.
Create an API endpoint that selects a random greeting from your table (you will need a controller with an action and Rails route).
Create a static view that will be the root of your app.
Create the App component with react-router and render it in your static view.
Create the Greeting component that will display a greeting. Set it up as a route in your App component.
Create a store, an action and a reducer that will connect to you API endpont to get the random greeting.
Display the random greeting in your Greeting component.


## 🔧 Built with<a name = "with"></a>


- React/Redux
- Hooks
- React Routes
- React-dom
- HTML, CSS, JavaScript (ES6)
- Ruby
- Rails
- gem 'react-rails'
- gem 'webpacker', '~> 5.0'
- gem 'spring'
- PostgreSQL
- react 17.0.2
- react_ujs 2.6.1
- react-redux 7.2.5
- react-router-dom 5.3.0
- redux 4.1.1
- redux-logger
- redux-thunk
- Linters: Rubocop, ESLint
- NPM
- Functional based Components with React Hooks 
- Virtual DOM
- [Webpack config](hhttps://webpack.js.org/guides/getting-started/)
- ES6 Modules 
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)
- Use [React Router](https://reactrouter.com/).
- Use styles in a React app. [CSS modules](https://github.com/css-modules/css-modules).
## Getting Started <a name = "gs"></a>
> To get a local copy up and running follow these simple example steps.

<details>
  <summary>Get instructions</summary>

  ### Database Setup

- In your terminal, while in the root dir of your Rails project, type <code>bin/rails db:setup</code> to create your local databases, load the schema, and initialize with the seed data.

## Usage

1. In your terminal, run <code>bin/rails server</code> while inside the root directory of the repository files
2. Go to your browser of choice and enter this URL: [http://localhost:3000](http://localhost:3000)
3. \[Optional\] if you want to make changes to the JavaScript file and see changes immediately, run `./bin/webpack-dev-server`
4. Refresh the page to see a different greeting message! 😸

**Note:<br>_ These commands will not stop on their own. If you change something in your project files, it will recompile and reload the page in your browser. To exit, hit "ctrl + c"_**

## Linters
To run the linters included in this repository, go to the root directory of your repository and copy/paste the following commands into your terminal:
(**Note:** Make sure you run `npm install` before you do this)
- for ESlint, `npx eslint <path of file>`
- for Rubocop, `rubocop .`

```
$ cd <folder>
```

~~~bash
$ git clone https://github.com/errea/React-Redux-BookStoreApp-Redo.git
$ cd React-Redux-BookStore-App
~~~

Run `bundle Install` to install the node modules and webpacker.

Run `yarn build` to build the bundler.

Run `yarn start`  opens on `http://localhost:8080/` in your browser.

## Set up
* Open your terminal and locate the folder you want to clone the repository and follow the steps above to install

</details>



## Project Structure

    Book-Store-Redux Project
    └── node_modules
    └── .github\workflows
        └── linters.yml
    /src
    |---/components
    |---/redux
        |--- /books
                | books.js
        |--- /categories
                | categories.js
        | cofigureStore.js
    | index.js
    └── .eslintrc.json
    └── .gitignore
    └── .hintrc
    └──.stylelintrc.json
    └── MIT.md
    └── package-lock.json
    └── package.json
    └──README.md

## ✒️  Authors <a name = "author"></a>

👤 **Eri**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)
  
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/errea/Hello-world-rails-react/issues)
## 👍 Show your support

- Microverse: [@microverse](https://www.microverse.org/)

## Acknowledgments

- Microverse

## 📝 License

This project is [MIT](./MIT.md) licensed.


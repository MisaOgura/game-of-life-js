## Conway's Game of Life - Vanilla JS

This is my first experimentation on implementing the Conway's Game of Life in vanilla JavaScript.

It is a work in progress, and I'm hoping to explore ways to improve the performance, as well as patterns.

Below is an example of the game with the classic B3/S23 configuration:

![Conway's Game of Life](https://github.com/MisaOgura/game-of-life-js/raw/master/gol-b3s23.gif)

## Instructions

### To run it locally

1. Make sure you have `node` and `npm` installed, if not refer to below.
    - Mac users: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
    - Windows users: http://blog.teamtreehouse.com/install-node-js-npm-windows
    
2. Alternatively, use [yarn](https://yarnpkg.com/en/) for faster dependency installation
    and more stable dependency management. You can use `yarn` in the place of `npm`.
    ```
    $ yarn install
    ```
    instead of
    ```
    $ npm install
    ```
    - Instructions for installation: https://yarnpkg.com/lang/en/docs/install/
    
3. Clone the repository.
    - Using SSH (recommended):
    ```
    $ git clone git@github.com:MisaOgura/game-of-life-js.git
    ```
    - Using HTTPS:
    ```
    $ git clone https://github.com/MisaOgura/game-of-life-js.git
    ```
    
4. Move into the cloned directory.
    ```
    $ cd game-of-life-js
    ```

5. Install dependencies.
    ```
    $ npm/yarn install
    ```
    
6. Run the app locally in a _dev_ mode.
    ```
    $ npm/yarn start
    ```
    
This should automatically open up a window in a browser. If not, visit
`http://localhost:8080/`: you should see the grid where all the magic happens.

7. Observe the mesmerising world of tiny cells!


### To run tests

The project uses [Jest](https://facebook.github.io/jest/) as a test runner.
It comes with useful features like parallel testing, intelligent test watching
and coverage report.

1. Install dependencies, if you haven't done yet.

2. Run all the tests once.
    ```
    $ npm/yarn test
    ``` 
    - Also runs `standard` ([JavaScript Standard Style](https://standardjs.com/)) at the end to highlight any
    linting errors.

3. Run tests in a watch mode.
    ```
    $ npm/yarn test:watch
    ```

Happy TDD!


## Authour

Misa Ogura

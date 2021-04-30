# Team KNOW Frontend

## Including the library in your project

(see demo.html for an example)

1) Include the library

```html
<script src="./main.js"></script>
```

2) Include React (which is not bundled with the library, see the bottom of `webpack.config.js` for details)

Note you can change `.production.min` -> `.development` to get better debug output if you're adding to the project.

```html
<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.min.js"></script>
```

3) Execute the library

```html
<script>
  render("divIDToInsertInto", "https://wikidata.org/wiki/Q23", "http://backendURL:8000")
</script>
```

## Setup

First, you'll need to install Node.js in order to install npm, which is what we use for managing all of our Javascript packages. Download Node.js and npm [here](https://www.npmjs.com/get-npm).

Once you have npm installed, do the following:

1) `cd` into the src/ folder, where `package.json`, `index.tsx`, etc are contained.
2) Run `npm install` to install all of packages required to run/build the project.

## Running

Run `npm run dev` to run webpack and compile our Typescript(`.tsx`) files into javascript

* These `.tsx` files are compiled into `static/main.js`.

To see it working, open `test.html` in the browser.

## Environment setup

VSCode is recommended, and all of these instructions are under the assumption you're using it.

You can view the VSCode setup Gannon wrote for another project (which uses the same stack as ours)
[here](https://github.com/aggie-coding-club/Rev-Registration/wiki/VS-Code-Setup). Namely, it's
recommended to setup auto-linting with ESLint.

## About

We are currently using [Typescript](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303) and [React](https://reactjs.org/). To do these, we have 3 configuration files, one for webpack, `webpack.config.js`, one for Typescript, `tsconfig.json`, and one for our package manager npm, `package.json`(and it's generated file `package-lock.json`)

* `package.json`
  * This contains 3 major things:
      1) `dependencies`: Contains all of the packages we'll need to actually run the project on the browser.
      2) `devDependencies`: Dependencies that help us develop the project, such as linting and testing
      3) `scripts`: These all us to run `npm run dev` to quickly run webpack/compile our Typescript.
* `tsconfig.json`
  * Defines how typescript is compiled and where to compile it to.

* `webpack.config.js`
  * This is what actually compiles the Typescript and React into javascript for the browser to interpret.
  * See file for descriptions of each config value.

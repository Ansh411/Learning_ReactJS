## How to build server without using npx

We can add "start" in the scripts section in package.json file

and also we can build dev using "build" in the scripts section

"scripts": {
"start" : "parcel index.html",
"build" : "parcel build index.html",
"test": "jest"
}

## To run this we have to type in the terminal :

as to start the server we use : "npm run start" or we can do "npm start"✅

but for building the dev we use : "npm run build" ❌{here we cannot do npm build}

## About JSX (new way of creating react element)

⭕ JSX has HTML like syntax or XML like syntax

⭕ JSX element == React.createElement

⭕ JSX => React.createElement => (JS Object) => Renders it to HTML DOM

⭕ JSX is written using "Babel" under Parcel which works as transpiler which transpiled the code to make it React Element then it usual process as it renders to HTML
(It transpiled before it reaches to JS Engine)

⭕ In JSX, we define class with "className" and other attributes are also defined with "camelCase"

⭕ When we define any JSX element in more than 1 line so we enclose it using parentheses to make sure babel understands it

## How to build server without using npx

We can add "start" in the scripts section in package.json file

and also we can build dev using "build" in the scripts section

"scripts": {
"start" : "parcel index.html",
"build" : "parcel build index.html",
"test": "jest"
}

## To run this we have to type in the terminal :

To start the server we use : "npm run start" or we can do "npm start"✅

but for building the dev we use : "npm run build" ❌{here we cannot do npm build}

## About JSX (new way of creating react element)

⭕ JSX has HTML like syntax or XML like syntax

⭕ JSX element == React.createElement

⭕ JSX => React.createElement => (JS Object) => Renders it to HTML DOM

⭕ JSX is written using "Babel" under Parcel which works as transpiler which transpiled the code to make it React Element then it usual process as it renders to HTML
(It transpiled before it reaches to JS Engine)

⭕ In JSX, we define class with "className" and other attributes are also defined with "camelCase"

⭕ When we define any JSX element in more than 1 line so we enclose it using parentheses to make sure babel understands it

## How react save us from malicious response from API, if we directly use it in our code

✅ Point : If we get response from any malicious API and we use it in our components using curly braces as JS file
then JSX(React) takes care of the malicious file and React automatically escapes it and if possible it sanitize the response to use or does not run in our code

🔥 This is known as cross-site scripting

⭕ Example of cross-site scripting

function App({ message }) { // This is a component where message is being fetched by API
return <div>{message}</div>;
}

✅ Case: 1 Safe Input API Return => { "message": "Hello, Ansh!" }

React will safely render it as => Hello Ansh!

✅ Case: 2 Malicious input API returns => { "message": "<script>alert('You are hacked')</script>" }

Now React automatically escapes it, so browser shows => <script>alert('You are hacked')</script> and nothing danger happens => so react protects you

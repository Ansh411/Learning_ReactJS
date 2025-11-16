import React from "react";
import ReactDOM from "react-dom/client"


//⭕ React.createElement => (JS Object) => Renders it to HTML DOM


//⭕ This is a older method / hard method to create an element but it is very complex and hard to maintain

const heading = React.createElement("h1",
    {id : "heading"},
    "Namaste React"
);

console.log(heading)

/* Now we use JSX to create React Element (JSX stands for Javascript XML)

⭕ JSX has HTML like syntax or XML like syntax 

⭕  JSX element == React.createElement

⭕ JSX => React.createElement => (JS Object) => Renders it to HTML DOM

⭕ JSX is written using "Babel" under Parcel which works as transpiler which transpiled the code to make it React Element then it usual process as it renders to HTML
(It transpiled before it reaches to JS Engine)

⭕ In JSX, we define class with "className" and other attributes are also defined with "camelCase"

⭕ When we define any JSX element in more than 1 line so we enclose it using parentheses to make sure babel understands it

*/

const jsxHeading = (<h1 className="heading" tabIndex="1">
    Namaste React using JSX 🚀
    </h1>)

console.log(jsxHeading);

/*
React components can be any element/tag like a card or a div etc.

 React Components are of two types:

 1. Class Based Components - Older way of using components
 2. Functions based Components - New way and mostly used way

 */

 // Functional Components - The functions which return jsx element is known as functional components

 // The name of components should start with capital letter

const Title = () => (
    <h1 className="heading" tabIndex="2">Namaste React using JSX 🚀</h1>
)

const HeadingComponent_1 = () => (        // We can add nested elements/ tags
<div id="container">                
    <h1 className="Component">Namaste React Functional Components</h1> 
</div>
);

const HeadingComponent_2 = () => (    // If we want to use another component inside any components (Component Composition)
    <div id="container_2">
        <Title />
        <h1 className="Component">Namaste React Functional Components</h1>
    </div>
)

// Using curly braces {} we can use any JS thing inside anything whether it is element or components like we can use react element directly using this -> {}
const HeadingComponent_3 = () => (  
    <div id="container_3">
        <h1>{10426 + 42536}</h1>
        {jsxHeading}
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="Component">Namaste React Functional Components 🔥</h1> 
    </div>
)

// Point : If we get response from any malicious API and we use it in our components using curly braces as JS file
// then JSX(React) takes care of the malicious file and React automatically escapes it and if possible it sanitize the response to use or does not run in our code

// This is known as cross-site scripting

// Example of cross-site scripting

function App({ message }) {    // This is a component where message is being fetched by API
  return <div>{message}</div>;
}

// Case: 1   Safe Input  API Return => { "message": "Hello, Ansh!" }

// React will safely render it as   =>  Hello Ansh!

// Case: 2  Malicious input API returns => { "message": "<script>alert('You are hacked')</script>" }

// Now React automatically escapes it, so browser shows  => <script>alert('You are hacked')</script> and nothing danger happens => so react protects you

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent_3 />); // Here we render react components using anchor tags (<>)
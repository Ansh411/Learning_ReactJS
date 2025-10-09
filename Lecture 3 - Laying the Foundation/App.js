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
    Namaste React from JSX 🚀
    </h1>)

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
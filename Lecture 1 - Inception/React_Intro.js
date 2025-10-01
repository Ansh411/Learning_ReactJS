const heading = React.createElement(        // Both attributes and children comes under "props" (properties in react)
    "h1",
    {id : "heading", xyz : "abc"},       // This is known as "attributes" where we can attach any styles, id , or any other attributes
    "This is H1 tag"     // This is known as "children" which attaches to the tag which is created here
);

console.log(heading); // The createElement in react does not create a tag rather it creates a "JS object" which have all the info

const root = ReactDOM.createRoot(document.getElementById("root")); // With this we get the "root" where we render our element

root.render(heading); // Here the JS Object from createElement is rendered or "attaches to the DOM" where root is the attaching point
                      // It actually replaces the whole thing inside that element or root element with the rendered element
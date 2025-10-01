// If we want to make nested elements and tags then we have to pass the React.createElement() inside the children of the outer react element

/* <div>
        <div>
            <h1> I am a H1 tag </h1>
        </div>
    </div1>
*/

const parent_1 = React.createElement(
    "div",
    {id : "parent_1"},
    React.createElement(
        "div",
        {id : "child"},
        React.createElement(
            "h1",
            {id : "heading_1"},
            "I am a H1 tag"
        )));

const root_1 = ReactDOM.createRoot(document.getElementById("root_1"));

root_1.render(parent_1);


// If we want to create more than one tag/element inside any element then we have to pass the array of children with each child build with react.createElement()

/*
        <div>
            <h1> I am a H1 tag </h1>
            <h2> I am a H2 tag </h2>
        </div>
*/

const parent_2 = React.createElement(
    "div",
    {id : "parent_2"},
    [React.createElement("h1",{}, "I am a H1 tag from P2") , React.createElement("h2",{}, "I am a H2 tag from P2")]
);

const root_2 = ReactDOM.createRoot(document.getElementById("root_2"));

root_2.render(parent_2);

// If we want combination of the above two i.e nested elements with more than one child

/*
    <div id = "parent">
        <div id = "child">
            <h1>H1 Tag</h1>
            <h2>H2 Tag</h2>
        </div>
        <div id = "child">
            <h1> H1 Tag </h1>
            <h2> H2 Tag </h2>
        </div>
    </div>
*/

const parent_3 = React.createElement(
    "div",
    {id : "parent_3"},
    [
    React.createElement(
     "div",
     {id : "child_1"},
     [
        React.createElement("h1",{}, "H1 tag from P3"),
        React.createElement("h2",{}, "H2 tag from P3")
    ]
),
    React.createElement(
      "div",
      {id : "child_2"},
    [
        React.createElement("h1",{}, "H1 tag from P3"),
        React.createElement("h2",{}, "H2 tag from P3")
    ]
)
    ]
);

    const root_3 = ReactDOM.createRoot(document.getElementById("root_3"));

    root_3.render(parent_3);
    


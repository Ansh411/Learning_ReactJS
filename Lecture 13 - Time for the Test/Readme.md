# Testing 

## Types of Testing (For Developers)

### Unit Testing
### Integration Testing
### End to End Testing - e2e Testing

## Packages and library required for testing

<ul> 

<li>@testing-library/react</li>
<li>@testing-library/dom</li>
<li>jest</li>
<li> jest with Babel
    <ul> 
        <li>babel-jest</li>
        <li>@babel/core</li>
        <li>@babel/preset-env</li>
        <li>babel.config.js</li>
        <li>@babel/preset-react to make jsx works in test cases
             and include it inside babel.config.js</li>
    </ul>
</li>
<li>configure .parcelrc file (Parcel config file) to disable default babel transpilation</li>
<li>Intialise jest - npx create-jest</li>
<li>jsdom library - jest-environment-jsdom</li>
<li>@testing-library/jest-dom - for the jest DOM in the test cases</li>
<li></li>
<li></li>

</ul>

### Unit Testing

```js
test("description", (callback function) => {
    render();
    expect().toBe();
})
```

test() and it() are same <br/>

in expect().not.toBe()  -- To negate any result

describe() for grouping the test cases for clean code <br/>

fireEvent() for adding any action like click, focus, abort

If we have to pass props we have to do it using MOCK_DATA and then test it

for calling an API we don't have fetch in jsDom so we have to explicitly fake the calling of an API and getting the data with the MOCK_DATA

act() for state updates - it returns a promise

getRoleByTestid() and data-testid = "" to the element we want to be tested

beforeAll() , beforeEach() , afterAll() and afterEach() -- Helper Functions

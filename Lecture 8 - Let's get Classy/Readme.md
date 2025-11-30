### Class-Based Components in React

➡️ Class components are an older way of writing React components using ES6 classes instead of functions.<br/>
➡️ They use render() to return UI and manage state using this.state and this.setState().<br/>
➡️ They also use lifecycle methods like componentDidMount and componentDidUpdate to run code at different stages.<br/>

## class component inherits via "extends" React.Component from react

➡️ A class component is created by using a class that extends React.Component, meaning it inherits all React features like state and lifecycle methods.<br/>
➡️ This inheritance gives the class component built-in abilities such as this.state, setState(), and lifecycle functions.
Because of this “extends” keyword, the class becomes a full React component with UI rendering power.<br/>

## There is render () which returns the jsx part

➡️ In a class component, the render() method is the function that returns the JSX UI.
React calls render() every time the component needs to update.
Whatever you write inside render() becomes the visible part of the component on the screen.<br/>

## If we want to give props , then we have to add constructor with super(props) to get the props inside the instance of the class

➡️ In class components, if you want to use props inside the constructor, you must write a constructor and pass props to super(props).
This makes sure the class component correctly receives props from its parent.
After that, you can access them using this.props anywhere in the component.<br/>

## To intialize a state variable we use this.state = {} where we define state variables inside the constructor , we can define as many as we want

➡️ To initialize state in a class component, we use this.state = {} inside the constructor.
Here, you define all the state variables you want as key–value pairs.
You can add as many state variables as needed inside this object.
This creates the initial state for the component before it renders for the first time.<br/>

## To update the state variables we use this.setState({}) , inside the render () , where we update the value of state variables and inside this whichever variable is updated only those variable value will be updated

➡️ To update state in a class component, we use this.setState({}) instead of changing the state directly.
You usually call setState inside events or lifecycle methods (not inside render()).<br/>
➡️ setState updates only the specific state variables you mention inside it — not the whole state object.
After updating, React re-renders the component and reflects the new values in the UI.<br/>

## Component Lifecycle Methods

➡️ Lifecycle methods are special functions in class components that run at different stages of a component’s life.<br/>
➡️ They include mounting (when the component first appears), updating (when state/props change), and unmounting (when the component is removed).<br/>

#### If there are two or more than two child components inside a parent component, then the react has an optimization that it will combine the 'render phase' of the components and then combine the 'commit phase' (Mounting Lifecycle)

➡️ If a parent has multiple child components, React optimizes mounting by batching work.<br/>
➡️ During React runs all constructors and renders (Virtual DOM work) for the parent and all children.It does not touch the real DOM yet.
After that, in the commit phase, React applies all the real DOM changes at once (mounting them together).
Then it calls lifecycle methods in order: Child 1 → Child 2 → Parent componentDidMount.
This batching makes rendering faster and avoids unnecessary DOM updates.<br/>


➡️ For Eg: If I have child 1 and child 2 components, then execution will be like:<br/>

    -- Parent Constructor Called 
    -- Parent Render Called 

    -- Child 1 Constructor Called
    -- Child 1 Render Called 

    -- Child 2 Constructor Called
    -- Child 2 Render Called 

    <DOM UPDATE - IN SINGLE BATCH> 

    -- Child 1 Component Did Mount Called 
    -- Child 2 Component Did Mount Called 
    -- Parent Component Did Mount Called

### How to make API calls in class based components and updation lifecycle (componentDidUpdate)

➡️ In class components, API calls are usually made inside componentDidMount(), which runs once after the first render.

    -- MOUNTING 
    
    -- Constructor (Dummy) Set initial dummy state <br/>
    -- Render (Dummy) UI shows placeholder/dummy content <br/> 
        <HTML Dummy>
    -- Component Did Mount Make the API call here <br/>
        API Call
        <this.setState> State variable is updated (When data arrives, call this.setState(), which triggers an update) <br/>
    
    -- UPDATING

       -- render(API Data) Component re-renders with the new API data <br/>
            <HTML new API Data>
      -- Component Did Update - Runs after every update, useful for logic that depends on previous or updated state <br/>


### About ComponentWillUnmount

➡️ componentWillUnmount runs right before a component is removed from the screen.<br/>
➡️ It’s used to clean up things like timers, intervals, event listeners, or API subscriptions.
This prevents memory leaks and stops unwanted background tasks.<br/>

### How to re-render according to the state variable updation in class based component

➡️ In class components, React re-renders automatically whenever you call setState().<br/>
➡️ But if you want to run extra logic only when specific state variables change, you use componentDidUpdate(prevProps, prevState).

If you want code to run once after an API update, you leave componentDidUpdate empty.<br/>

➡️ As componentDidUpdate is rendered after updating the rendering with the API data so if we want to re-render only once then there is no change in the componentDidUpdate code

but if we want to update according to change in state variable then , we use if-else statements for each update

like if the state variable is count , so we do like:

```js
    componentDidUpdate (prevProps, prevState) {
    if(this.state.count !== prevState.count){
        // then update
        }
    }
<br/>

and if there are two state variables (count_1 and count_2) then :

```js
    componentDidUpdate (prevProps, prevState) {
    if(this.state.count_1 !== prevState.count_1 || this.state.count_2 !== prevState.count_2){
        // then update
        }
    }

```
<br/>

and if there are different updates according to different state variables then we have to use different if-else conditons 

```js

    componentDidUpdate (prevProps, prevState) {
    if(this.state.count !== prevState.count){
        // then do something
    }

    if(this.state.count_2 !== prevState.count_2){
        // then do something
        }
    }
```
<br/>

#### What is the main role of ComponentWillUnmount

➡️ componentWillUnmount is used to clean up anything that should stop running when the component leaves the page.<br/>
➡️ Without cleanup, things like timers, intervals, event listeners, or subscriptions keep running in the background.<br/>
For example, if you start a setInterval in componentDidMount, it will keep running even after you navigate away.<br/>
➡️ When you come back, a new interval starts again, causing duplicates — until you stop them manually.<br/>

➡️ To clear the backlogs of any other component

For Eg: If we have setInterval in componentDidMount like:<br/>
```js
    componentDidMount() {
    this.timer = setInterval(() => {
        console.log("Ansh OP")
     }, 1000);
    }
```
<br/>
So this will be running even if I move to other pages and if I return to the same page it will also start again this new setInterval and it will keep on going untill we clear it

So that is why we use ComponentWillUnmount to clear things that need to stop when we move to other page<br/>
```js
    ComponentWillUnmount(){
     clearInterval(this.timer);
    }

```
<br/>

#### In case of useEffect , how will we clear the setInterval if initiated

➡️ In functional components, the cleanup is handled using the return function inside useEffect.<br/>
➡️ This return function runs when the component unmounts, working exactly like componentWillUnmount

```js

    ➡️ useEffect(() => {

    const timer = setInterval(() => {
        console.log("Ansh OP");
    }, 1000);
    console.log("useEffect");

    // Here we have a return function which will be rendered when we move to other pages after the useEffect so it kind of acts as componentWillUnmount

    return () => {
        clearInterval(timer);
        console.log("useEffect return");
    }
    },[]);

    console.log("render");
```
Output will be : 

-- render<br/>
-- useEffect<br/>
-- useEffect return<br/>
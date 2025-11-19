### Microservices vs Monolith Architecture

#### Monolithic Architecture

It’s like building one big app where everything—UI, backend, database logic—lives together in a single codebase.
If one part fails or needs updating, the whole app often has to be redeployed.
It’s simple to build initially but becomes harder to scale and maintain as the app grows.

#### Microservices Architecture

Here, the app is broken into many small, independent services (like tiny apps) that handle specific tasks.
Each service can be updated, deployed, and scaled separately without affecting others.
It’s more flexible and scalable but needs good communication between services.<br>

➡️ Like here we are using react for the UI and to fetch any data from backend and updating UI according to that data , we use useEffect() hook

#### Comparison

Monolith = one big house; Microservices = many small, separate rooms.
Monolith is easier to start but harder to grow; microservices are harder to start but grow smoothly.
Microservices give better scalability and independence, while monoliths are simpler and faster to build.

### Separation of Concerns (SoC) in Microservices

This means breaking your application into different parts where each part handles only one type of work.
In microservices, SoC ensures every service focuses on one feature, like payments, users, or orders.
It keeps the system cleaner, easier to understand, and reduces the chances of one change breaking everything.

### Single Responsibility Principle (SRP) in Microservices

SRP says: “One service should do one job, and do it well.”
Each microservice handles a single business responsibility—for example, the user service only manages users.
This makes the service easier to update, test, and scale without touching other services.

## React Hook : useEffect() 

➡️ useEffect is a React hook that lets your component run some extra code after it renders, like fetching data, updating the document title, setting timers, or syncing with external systems.<br>

➡️ Syntax: useEffect(() => {
                // code to run
            }, [dependencies]);
<br>

➡️ Dependency Array <br>

The dependency array tells React when to run the effect:<br>

⭕ [] → run only once (like componentDidMount).<br>

⭕ [value] → run whenever value changes.<br>

⭕ No array → run after every render.<br>

### We have our project which is mainly Frontend UI part and how we connect with backend to fetch the data using react hooks useEffect

⭕ Our frontend React code cannot directly read databases — it calls your backend API using fetch() or axios.<br>
⭕ Inside useEffect, you write a function that sends a request to the backend (like GET /users).<br>
⭕ React runs this effect after the component loads, fetches the data, and then updates the UI using useState.<br>
⭕ So, useEffect handles “when to fetch,” and useState stores the fetched data, making everything reactive and automatic.<br>

## Shimmer UI - Better UX 

⭕ Shimmer UI is a loading animation that looks like grey boxes with a moving light effect, shown while real content is being fetched.<br>
⭕ It makes the app feel faster and smoother, even if data is still loading.<br>
⭕ Instead of showing a blank screen or spinner, shimmer shows a “preview layout” of what’s coming.<br>

➡️ This improves the user experience because users see the structure instantly and don’t feel like the app is stuck.<br>

### Why we use state variables instead of normal JS varibales for updating any value in sync with UI

➡️ We use state variables because React keeps a track of them and updates the UI automatically whenever they change.<br>
➡️ A normal JS variable changes behind the scenes i.e. it changes the data, but React doesn’t know they changed, so the UI never updates.<br>
➡️ State tells React: “This data affects the UI — so if it changes, re-render the component.” and the reconciliation algorithm triggers and it updates it in our actual DOM after finding the difference between previous virtual DOM and current virtual DOM.
That's why react is very fast in DOM manipulation.<br>
➡️ This keeps the UI always in sync with the latest values without manually updating anything.
If we used normal variables, the UI would not refresh and would show old data.<br>

#### With every call of setVariable in useState() , the whole component is re-rendered but only the updated element is changed in the UI 

When you call setVariable, React runs the component function again to recalculate what the UI should look like.
But React does not directly update the real DOM — instead, it rebuilds a Virtual DOM version in memory.
Then React compares the old and new Virtual DOM using a process called diffing.
It finds exactly what changed (maybe just one text or one button).
Finally, React updates only that tiny part in the real DOM, keeping everything fast and efficient.<br>

### Search Button Functionality - Filtering restaurant based on their names

When you type something in the search box, the search text is stored in state.
React re-renders the component every time this state changes.
During that re-render, your filter function runs again and picks only the restaurants whose names match the search text.
React then updates just the restaurant list on the screen, giving real-time filtering as you type.<br>

#### How with each key pressed , react re-renders the whole body component

React re-renders the whole component on every key press because the input value is stored in state, and changing state triggers a re-render.<br>
When you type a letter, setSearchText() updates the state, and React says: “State changed → recalculate the UI.”
So React runs the entire component function again to rebuild the Virtual DOM based on the new search text.
Then it compares old vs new Virtual DOM and updates only the parts that actually changed in the real DOM (like the restaurant list).<br>
That’s why one key press = one state update = one re-render.<br>

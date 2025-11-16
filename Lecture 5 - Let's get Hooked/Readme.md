## For clean code, we make different files and folder for different components

⭕ We can do it as we wish but the generic norm is that our code should be inside the "src" folder and the other packages should be outside of the 'src' folder.

## Export and Import

⭕ Whenever we use multiple components in a single file, it is very hard to manage and the code looks clumsy , so we make separate components and we export them from the components file and import them into our main code and we can anywhere import the components

⭕ For Eg: after the component code in the last we add => export default COMPONENT_NAME; and then we import like : import COMPONENT_NAME from "COMPONENT_PATH" 

## Types of Import and Export

### ⭕ Default Import and Export : 

Export : When we have only simgle component in a file then we use default export for that component : export default COMPONENT_NAME; 

Import : We directly import it like : import COMPONENT_NAME from "COMPONENT_PATH";

### ⭕ Named Import and Export :

Export : When we have multiple components in a single file and we have to export all of them then we add "export" in the declaration of the components 

For Eg: export const Header = () => {} <br>
        export const Navbar = () => {}

Import : To import these named exports we use {} for the exact component we want to import

For Eg: import {Header} from "HEADER_PATH";

### Why we have to use state variables instead of normal variables for any changes in the components data ?

➡️ In react if we want to update the UI with just updating the variable value , then it will only update the data not the UI and to make the UI update we can't have normal variables,
   we have to use state variable using react hooks.

➡️ So to keep the UI and data in sync we use state variables


## React Hooks

➡️ React Hooks are just normal utility functions in React that help you add features like storing data (state) and handling component updates inside normal functions.

### 1. useState() 

useState is a React Hook that lets you create and update a variable (state) inside a functional component. It helps your UI change when the value changes.

Syntax: const [value, setValue] = useState(initialValue);

## Reconciliation Algorithm (React Fiber)

➡️ React Fiber is React’s improved reconciliation algorithm which is the core algorithm of React that decides what parts of the UI need to be updated when something changes.
It breaks the UI update work into small pieces so React can do it smoothly without freezing the page.
It helps React update components faster and handle animations, gestures, and rendering more efficiently.

### Virtual DOM 
➡️ The Virtual DOM is a lightweight copy or representation of the real DOM that React uses to track changes in the DOM
When something changes, React updates the Virtual DOM first, finds the difference, and then updates only the required parts in the real DOM.
This makes the app faster and more efficient.


#### Diff Algorithm :
➡️ It is a method React uses to compare the old Virtual DOM with the new Virtual DOM.
It finds what has changed and updates only those parts on the real page.
This helps React work faster.

✅ That is why react apps are fast because of the efficient DOM Manipulation through reconciliation process and with virtual DOM


##### For Example:

const [ResList , setResList] = useState(resData);

➡️ It can also be written as:

const arr = useState(resData);

const ResList = arr[0];
const setResList = arr[1];

➡️ So basically useState() returns an array
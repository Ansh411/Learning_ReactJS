## Custom Hooks

### What are Custom Hooks?

➡️ Custom Hooks are reusable JavaScript utility functions in React that start with the name "use" and allow you to extract and reuse component logic.<br/>

For Eg: <br/>

```js

function useOnlineStatus() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
  }, []);

  return online;
}

```

### ✅ Why are Custom Hooks used? 

1️⃣ Reusability of Logic <br/>

If multiple components need the same logic (e.g., fetching data, checking online status), instead of writing the same code again and again, you put it in a custom hook.<br/>

➡️ Write once → Use anywhere.<br/>

2️⃣ Cleaner & More Readable Components <br/>

Components should mainly handle UI, not heavy logic.<br/>

Custom hooks move the logic out, so the component becomes neat:<br/>

```js
const online = useOnlineStatus();
```

3️⃣ Single Responsibility Principle <br/>

Every hook handles one specific task, like:<br/>

🔴 useFetch() → API fetching <br/>

🔴 useOnlineStatus() → Check network <br/>

🔴 useLocalStorage() → Manage local storage <br/>

Each hook has one responsibility, making code easy to maintain, test, and debug.<br/>

4️⃣ Optimizing & Avoiding Re-Rendering Issues <br/>

Extracting logic into custom hooks helps:<br/>

🔴 Reduce duplicate code <br/>

🔴 Prevent unnecessary re-renders<br/>

🔴 Keep logic in one place so performance optimizations can be done better <br/>

## When we have a single JS file bundled via parcel so it becomes very large which makes the app slow in loading that's why we use lazy loading technique to load the content when needed , we make different chunks of the code which loads whenever I want it to load

### Problem: Single Large Bundle = Slow App

➡️ When we build a React app using a bundler (like Parcel, Vite, Webpack), all JS files get combined into one big bundle.<br/>

This bundle includes: All components, All pages, All utilities, All libraries <br/>

As the app grows, this single bundle becomes very large in size. <br/>

➡️❗ What goes wrong? <br/>

The browser must download the entire bundle before anything shows on screen.<br/>

The larger the bundle → slower the initial load time.

## Lazy Loading / Chunking / Dynamic Loading / Code Splitting / On-demand Loading 

### Solution of Single Large Bundle: Lazy Loading (Code Splitting)

Lazy loading is the technique of loading components or code only when required, instead of loading everything at once.<br/>

➡️ It breaks the main bundle into multiple smaller chunks.<br/>

➡️ These chunks are loaded only when the user navigates to that part of the app.<br/>

### Why Lazy Loading Improves Performance

Smaller initial bundle → App loads much faster.<br/>

Users download only what they need.<br/>

Heavy components do not slow down the first page.<br/>

Very useful for: Dashboard pages Charts, maps, Admin panels, Large libraries (moment.js, lodash, etc.)

## lazy and Suspense from react

### How Lazy Loading Works in React

React.lazy() lets you load a component only when it is needed, not during the initial load.<br/>

It returns a component that loads dynamically (useful for code splitting / lazy loading).<br/>

Suspense is used to wrap lazy-loaded components and show a fallback UI (like a loader) while the component is being fetched.<br/>

Together they help reduce bundle size and make the app load faster.<br/>

```js
const About = React.lazy(() => import("./About"));

<Suspense fallback={<h1>Loading...</h1>}>
  <About />
</Suspense>
```
The fallback is the temporary UI shown while a lazy-loaded component is still loading.<br/>

It can be anything: text, loader, shimmer, spinner, or a custom component.<br/>

### Error : A component suspended while responding to asynchronous input

React doesn’t want the UI to “freeze” during user input, so it warns you that something is loading too slowly.<br/>

Usually happens when a route or component is lazy-loaded after a user action.<br/>

Fix: Make sure the lazy load is wrapped in `<Suspense>` and avoid triggering heavy async work directly during fast user inputs.<br/>
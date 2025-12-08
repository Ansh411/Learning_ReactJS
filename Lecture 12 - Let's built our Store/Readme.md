## ***When we click on add/remove/clearcart button , it dispatches an action which calls the reducer function which updates the slice of the store and as header component is subscribed to the store using a selector , it automatically gets updated whenever there is any change***

### Redux ToolKit and React-Redux

**⭐ What is Redux?**

<ul>


<li>Redux is a state management library used to store and manage global state in big React apps.</li>

<li>Instead of passing props manually everywhere, Redux keeps shared data in a central store.</li>

<li>Components can read or update this store from anywhere in the app.</li>

<li>Redux follows a predictable flow: State → UI → Action → Reducer → New State.</li>

<li>It is useful when many components need to share the same data (cart, login info, theme, APIs).</li>

</ul>


**⭐ Redux Toolkit (RTK) — Modern Redux**
<ul>

<li>RTK is the official recommended way to write Redux (simplifies old complex code).</li>

<li>It removes boilerplate: no need for long switch-case reducers or manually writing actions.</li>

<li>Everything (state + actions + reducers) is stored inside slices.</li>

<li>RTK gives built-in tools like createSlice, configureStore, and auto-optimizes performance.</li>

<li>Easier, cleaner, faster than old Redux.</li>

</ul>


**⭐ React-Redux — Connecting Redux to React**

<ul>

<li>It is the library that connects React components to the Redux store.</li>

<li>Provider gives access to the Redux store to the whole app.</li>

<li>useSelector() → used to read data from the store.</li>

<li>useDispatch() → used to dispatch actions (update the store).</li>

<li>Without React-Redux, React components cannot use Redux.</li>

</ul>


## Workflow of RTK :


1️⃣ UI triggers an action (Button Click) <br/>

When you click **Add / Remove / Clear Cart**, the component calls
`dispatch(addItem())` or `dispatch(removeItem())`.

2️⃣ Dispatch sends action to the Slice Reducer<br/>

Redux Toolkit checks which reducer matches the action name (example: addItem).
That reducer function runs and updates that part of the store (the slice).

3️⃣ Store gets new state <br/>

Redux automatically creates a new updated store with the changed slice (cart slice updated).<

4️⃣ Components subscribed using useSelector() re-render <br/>

Header is using: <br/>

`const cartItems = useSelector((store) => store.cart.items);`
 <br/>

So whenever the cart slice changes → Header re-renders automatically.

5️⃣ UI updates immediately <br/>

The cart count or list changes without manually passing props — Redux handles everything.

### Every keyword in RTK : Store , slice,  Dispatch -> actions , reducer functions , selector for subsribing to the store

**⭐ Redux Toolkit Keywords** <br/>

1️⃣ **Store** <br/>

The central container where all global states are stored.<br/>

Created using configureStore().<br/>

Contains multiple slices.<br/>

Any component can read/write data from the store.<br/>

2️⃣ **Slice** <br/>

A small portion of the store (example: cartSlice, userSlice, themeSlice).<br/>

Created using createSlice().<br/>

Inside a slice, we define:<br/>
✔ initialState<br/>
✔ reducer functions<br/>
✔ auto-generated actions<br/>

**Example**: cartSlice handles only cart-related data.<br/>

3️⃣ **Dispatch** <br/>

A function used to send actions to the store.<br/>

When you click a button, you use:<br/>
`dispatch(addItem(product))`
<br/>
Dispatch tells Redux “run this reducer now!”<br/>

4️⃣ **Actions** <br/>

They describe what you want to do (add item, remove item, clear cart).<br/>

In RTK, actions are auto-generated from the slice.<br/>

**Example**: addItem, removeItem, clearCart.<br/>

5️⃣ **Reducer Functions** <br/>

Functions inside a slice that update the state.<br/>

They run automatically when an action is dispatched.<br/>

**Example**: <br/>

`addItem()` → pushes item into cart <br/>

`removeItem()` → removes item<br/>

`clearCart()` → empties the array<br/>

Reducers = brain of Redux.<br/>

6️⃣ **Selector** <br/>

A function that reads data from the store. <br/>

Used with `useSelector()` hook.<br/>

**Example**: <br/>

`useSelector((store) => store.cart.items)` <br/>

Components re-render automatically when the selected slice updates.<br/>

### ✅ 1. useDispatch() — To Modify Slice Data

**What it is ?** <br/>

**useDispatch()** is a React-Redux hook used inside React components to send actions to the Redux store.<br/>

**Why we need it** <br/>

Components cannot directly modify Redux state.<br/>
They must dispatch actions → reducers handle those actions → store updates.<br/>

**How it works ?** <br/>

You import and call **useDispatch()**:<br/>

`const dispatch = useDispatch();`<br/>


When a user performs an event (button click), you dispatch an action: <br/>

`dispatch(addItem("Burger"));` <br/>


The action goes to the reducer function inside the slice. <br/>

Reducer updates the store state. <br/>

Components subscribed using useSelector() automatically re-render. <br/>

### ✅ 2. useSelector() — Subscribe to Store & Read Data

**What it is ?** <br/>

useSelector() is a hook used to read data from the Redux store. <br/>

**Behavior** <br/>

It subscribes to the store.<br/>

Whenever the selected part of the state changes, the component re-renders.<br/>

It only reacts to changes of the specific data you select—not the entire store.<br/>

### Why careful usage is important of useSelector()

If you do: <br/>

`useSelector((store) => store);` <br/>


→ You are selecting the entire store <br/>
→ Component re-renders for every tiny state change <br/>
→ Bad performance <br/>

Correct usage: <br/>

`const cartItems = useSelector((store) => store.cart.items);` <br/>


Select only what you need → minimizes re-renders → improves performance. <br/>

### ✅ 3. Reducer Functions
**What reducers are** <br/>

Reducers are pure functions defined inside a slice that: <br/>

✔ Receive state and action <br/>
✔ Modify the existing slice of the state <br/>
✔ Never mutate original state directly (RTK uses Immer under the hood) <br/>

**Example** <br/>
```js
reducers: {
  addItem: (state, action) => {
    state.items.push(action.payload);   // allowed because Immer handles immutability
  },
  removeItem: (state) => {
    state.items.pop();
  }
}
```
**Role** <br/>

Reducers describe HOW the state changes, never the UI. <br/>

### ✅ 4. configureStore()
**What it is** <br/>

A function provided by RTK that: <br/>

✔ Creates the Redux store <br/>
✔ Combines slices <br/>
✔ Adds useful middleware (e.g., Redux Thunk) <br/>
✔ Enables Redux DevTools automatically <br/>

**Example** <br/>
```js
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  }
});
```
<br/>

**Store responsibilities :** <br/>

Holds all slice states <br/>

Allows components to subscribe <br/>

Accepts dispatched actions <br/>

Routes actions to reducers <br/>

### ✅ 5. actions.payload
**What it is** <br/>

When you dispatch an action with a value: <br/>

`dispatch(addItem("Pizza"));` <br/>


The value "Pizza" becomes action.payload. <br/>

**Why we need it** <br/>

Payloads allow sending data from UI → Redux slice. <br/>

Example reducer receiving payload <br/>
```js
addItem: (state, action) => {
  state.items.push(action.payload);  // payload = "Pizza"
}
```
<br/>

### ✅ 6. Store

Store contains: <br/>

✔ Global state of the app <br/>
✔ Reducers from slices<br/>
✔ Middleware<br/>
✔ DevTools config<br/>

Store is created once and used everywhere using:<br/>

```js
<Provider store={store}>
  <App />
</Provider>
```
<br/>

Store acts as the “single source of truth”.

### ✅ 7. Slice
Slice contains: <br/>

✔ Name <br/>
✔ Initial state<br/>
✔ Reducers<br/>
✔ Automatically generated actions<br/>

**Example** <br/>
```js
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => { state.items.push(action.payload); },
    removeItem: (state) => { state.items.pop(); }
  }
});
```
<br/>

RTK auto-generates: <br/>

`cartSlice.actions.addItem` <br/>

`cartSlice.actions.removeItem` <br/>

and the reducer function. <br/>

## Difference between Store(reducer) and Slice(reducers)

| Feature | Slice | Store |
|--------|--------|--------|
| **Definition** | A feature-level module containing state + reducer functions | The global state container for the entire application |
| **Created Using** | `createSlice()` | `configureStore()` |
| **Contains** | `initialState`, `reducers`, and auto-generated `actions` | Combined reducers from all slices, global state, middleware |
| **Purpose** | To manage state logic for one specific feature (cart, user, theme, etc.) | To hold and manage the full application state |
| **Reducers** | Multiple reducer functions inside the slice | Only ONE root reducer (combination of all slice reducers) |
| **Scope** | Local to a feature | Global across the entire app |
| **Used For** | Handling updates for a specific part of the state | Managing and exposing the global state to React |
| **State Shape** | Example: `{ items: [] }` | Example: `{ cart: {...}, user: {...} }` |
| **Actions** | Automatically generated based on reducers | Actions are dispatched to the store which forwards them to slices |


### Vanilla Redux (Older Redux)

1. **State is immutable**

In Vanilla Redux, you cannot mutate the state directly.
You must always create a new object/array, copy the old state, modify it, and return it.<br/>

**Example:** <br/>

```js
return {
  ...state,
  items: [...state.items, newItem]
};
```
<br/>

2. **Returning state is mandatory**

Every reducer in Vanilla Redux must always return a state object,
even if no changes were made.<br/>

3. **Redux Toolkit still follows immutability (behind the scenes)**

RTK internally uses Immer, which allows you to “mutate” the state directly,
but Immer converts those mutations into a new immutable state automatically.<br/>

So we write: <br/>

`state.items.push(item);` <br/>

But behind the scene Redux Toolkit converts it into a new immutable state.<br/>

**clearCart Example — Why state = [] doesn’t work in RTK** <br/>

❌ This does NOT work:<br/>

```js
clearCart(state) {
  state = [];
}
``` 
<br/>

**Why?** <br/>

Because state = [] only reassigns the local variable,
NOT the actual Redux state stored in the slice. <br/>

Redux ignores this reassignment. <br/>

**Correct Ways in Redux Toolkit** <br/>

***✔ 1. Mutate the existing state*** <br/>

(Allowed because of Immer) <br/>

```js
clearCart(state) {
  state.items.length = 0;
}
```
<br/>

***✔ 2. Return a completely new state object***<br/>

(This replaces the slice state) <br/>

```js
clearCart() {
  return { items: [] };
}
```

<br/>

👆 This object becomes the entire slice state,
so the UI updates correctly. <br/>

### Redux DevTools

1. What are Redux DevTools?

Redux DevTools is a browser extension that helps you see, debug, and track your Redux store in real time while developing your app. <br/>

**Key Features** <br/>

1. Inspect Actions

You can see every action that gets dispatched (addItem, removeItem, clearCart, etc.)
Useful to check if your UI is dispatching the correct action. <br/>

2. Inspect State

You can check the state before and after each action.
Helps you verify if reducers are updating the slice correctly.<br/>

<hr/>
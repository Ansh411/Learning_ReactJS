## ⭐ Higher Order Components (HOC)

<ul>
<li>A Higher Order Component (HOC) is a function that takes a component and returns a new enhanced component.</li>

<li>It is used to reuse logic, inject extra props, or wrap a component with additional UI/behavior.</li>

<li>Think of it like adding “extra features” to an existing component without modifying its original code</li>
 </ul>
 <br/>

**Example** : We already have a RestaurantCard component. Now you want to add badges like: <br/>

VEG badge<br/>

Best Seller badge<br/>

Instead of writing this logic inside RestaurantCard, you create a HOC called withBadges().<br/>

#### ✔ What the HOC does:

Takes your original RestaurantCard as input.<br/>

Checks conditions (like if restaurant is veg or best seller).<br/>

Adds the badges visually.<br/>

Returns a new modified component that wraps the original card.<br/>

```js
const withBadges = (OriginalCard) => {
  return function EnhancedCard(props) {
    const isVeg = props.data.veg;
    const isBestSeller = props.data.rating > 4.5;

    return (
      <div>
        {isVeg && <p>VEG</p>}
        {isBestSeller && <p>Best Seller</p>}
        <OriginalCard {...props} />
      </div>
    );
  };
};
```

## Controlled and Uncontrolled Components

### ⭐ Controlled Components

In Controlled Components, React controls the form input using state.<br/>

The input value comes from a state variable, and every change updates the state.<br/>

UI ↔ State are always in sync.<br/>

**Example (Accordion Type Restaurant Menu)** <br/>

1️⃣ Parent decides “open or close” <br/>

In your app, the parent component (RestaurantMenu) stores a state called openIndex.
This state controls which accordion is open.<br/>

```js
isOpen={openIndex === idx}
onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
```
<br/>

So the parent controls the child → **Controlled Component**.

2️⃣ Child (RestaurantCategory) does NOT store its own state<br/>

Your RestaurantCategory does NOT use useState.
Instead, it uses the values sent from the parent:<br/>

isOpen → Should I show my items?<br/>

onToggle → Tell parent I was clicked.<br/>

This makes the child a pure UI component that listens to parent instructions.<br/>

3️⃣ How the accordion opens/closes (simple flow)<br/>

User clicks category → onToggle() runs.<br/>

Parent updates openIndex.<br/>

React re-renders.<br/>

Child receives new isOpen value → opens or closes.<br/>

This is the **controlled behavior**.<br/>

### ⭐ Uncontrolled Component (Opposite Behavior)

An uncontrolled accordion means each category controls itself internally, without a parent state.<br/>

Each accordion has its own useState() or local toggle logic.<br/>

Parent does NOT know which accordion is open; components manage themselves.<br/>

✔ **Example**

// Inside RestaurantCategory itself:<br/>
```js
const [isOpen, setIsOpen] = useState(false);
```
<br/>

Each item manages its own open/close → **uncontrolled**.

4️⃣ Where uncontrolled would be different <br/>

If each RestaurantCategory used its own useState() to store isOpen, then:<br/>

Parent can’t control it <br/>

Multiple accordions can open <br/>

Less predictable behavior <br/>

That would be an **uncontrolled component**.<br/>

5️⃣ Why your approach (controlled) is best <br/>

You can ensure only one category opens at a time <br/>

Parent has full control over accordion behavior <br/>

Predictable UI → clean design <br/>

Easier debugging and maintenance <br/>

## Lifting the state up in React (Accordion Example)

🔼 ***Lifting the State Up***

When multiple child components share some common state (or need to behave in sync), that state should NOT live inside each child.
Instead, you move (lift) that shared state up into their closest common parent, and then pass it down via props.<br/>

**Example : (Accordion)** <br/>

```js
const RestaurantMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return categories.map((category, index) => (
    <RestaurantCategory
      key={index}
      category={category}
      isOpen={openIndex === index}
      onToggle={() => handleToggle(index)}
    />
  ));
};
```
🔍 **Process** : <br/>

1. State (openIndex) lives in the parent

Only the parent knows which accordion is open.

2. Parent passes down isOpen (boolean)

Each category receives a prop telling whether it should be open.

3. Child triggers parent updates through onToggle

Child does NOT modify its own state — it only notifies the parent.

4. Parent re-renders the correct open category

This keeps the UI consistent and synchronized.

## Props Drilling (Problem of passing the props to the last nested child or in a very much nested environment)

**What is Props Drilling?** <br/>

Props drilling happens when you need to pass data from a top-level component to a deeply nested child, but the data must travel through several intermediate components that do not need it — they only pass it down.<br/>
These middle components become unnecessarily involved, making the structure complex and hard to maintain.<br/>

**🧠 Why is Props Drilling a Problem?**

❌ It creates unnecessary dependencies<br/>

Components in the middle receive props they don’t even use.<br/>

❌ Hard to read and maintain<br/>

If the nesting is deep, props are passed many levels down:<br/>

```js
Parent → Child → SubChild → SubSubChild → LastChild
```
<br/>

```js
function App() {
  const user = "Ansh";

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>User: {user}</p>;
}
```
<br/>

Here:

Only GrandChild needs the user <br/>

But App → Parent → Child → GrandChild <br/>

All components pass the same user unnecessarily<br/>

This is props drilling.<br/>

## Solution of props Drilling - useContext() 

Props drilling happens when you pass data through multiple intermediate components unnecessarily.
The solution is React’s Context API with useContext(), which allows you to share data across components without passing props manually.<br/>

useContext() removes the need to pass props through multiple layers.<br/>

Any nested component can directly access shared values.<br/>

It solves props drilling and keeps components cleaner and more reusable.<br/>

## createContext and useContext (implementation and use)

**🔹 What is createContext?** <br/>

It creates a Context object that stores shared data. <br/>

Helps avoid props drilling. <br/>

Used when multiple components need the same value (user, theme, cart, etc.). <br/>

**✔ Example :** <br/>

```js
const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser : "Default User"
});

export default UserContext;
```

<br/>

**What is useContext?** <br/>

A React hook to consume values from a context. <br/>

No props needed → directly read shared data.<br/>

**✔ Example**

`const { loggedInUser } = useContext(UserContext);` <br/>

Used directly inside a component → no prop drilling.<br/>


## how context is used in class based components using Consumer

**⭐ Context in Class-based Components using Consumer** <br/>

***Why Consumer?*** <br/>

Before hooks existed, class components could not use useContext().<br/>

So React provided Context.Consumer to read values.<br/>

It works using a function-as-a-child pattern.<br/>

**⭐ How Consumer works** <br/>

It listens to the nearest Context.Provider. <br/>

Whatever value Provider supplies → passed automatically to the function. <br/>

Inside that function, you return the JSX that uses the context value. <br/>

**⭐ Example**
```js
<div className="text-black font-bold">
  <UserContext.Consumer>
    {({ loggedInUser }) => (
      <h2>User: {loggedInUser}</h2>
    )}
  </UserContext.Consumer>
</div>
```
<br/>

**✔ What happens here?** <br/>

`<UserContext.Consumer>` grabs the data from Provider.<br/>

It passes the value object → { loggedInUser } to the function.<br/>

The function returns the JSX to render.<br/>

## How to provide context value to every component : By using Provider and wrapping root component inside it

**Why Provider?** <br/>

createContext() only creates a context.<br/>

But to send data to components, you must use Context.Provider.<br/>

Whatever value you give to Provider → becomes available to all nested components.<br/>

**How Provider Works ?** <br/>

Wrap your root component (or any parent) inside UserContext.Provider.<br/>

Pass a value like:<br/>

`value={{ loggedInUser: userName }}` <br/>

Now any child component (no matter how deeply nested) can access this using: <br/>

useContext(UserContext) → functional components <br/>

`<UserContext.Consumer>` → class components <br/>

This removes the need for props drilling. <br/>

**⭐ Example:** <br/>
```js
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = { name: "Ansh" };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
```
<br/>

**✔ What’s happening here?**

You get userName from an API (simulated).<br/>

You store it in state.<br/>

You wrap the app with:<br/>

`<UserContext.Provider value={{ loggedInUser: userName }}>` <br/>

Now Header, Outlet, and every nested component can read loggedInUser. <br/>

## If there are more than 1 context and if we provide one context over the root component and the other context inside other component then which value will it take ?

**⭐ If Multiple Providers of SAME Context Exist — Which Value is Used?** <br/>

👉 React always uses the nearest (closest) Provider above the component in the tree.<br/>

**Example:** <br/>
```js
<UserContext.Provider value={{ loggedInUser: userName }}>
  <div className="app">

    <UserContext.Provider value={{ loggedInUser: "Invincible411" }}>
      <Header />
    </UserContext.Provider>

    <Outlet />
  </div>
</UserContext.Provider>

```
<br/>

**✔ What will the components receive?** <br/>

Header → gets "Invincible411"
(because it is inside the inner Provider) <br/>

Outlet → gets userName (the outer Provider value)
(because it is NOT inside the inner Provider) <br/>

## If we want to update the context value then how can we do that ? (using state variables and passing the updating variable as value)

**⭐ Updating a Context Value in React** <br/>

1️⃣ Context values are usually static… unless we pass state into them.<br/>

To make context changeable, you must store the value inside useState() and pass both value & setter into the Provider.<br/>

**⭐ 2️⃣ How to Update the Context**

✔ Step 1: <br/>

Create state inside the root component (AppLayout): <br/>

`const [userName, setUserName] = useState();` <br/>

✔ Step 2: <br/>

Pass both userName and setUserName inside Provider: <br/>

`<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>` <br/>

Now any component can read OR change the username. <br/>

**⭐ 3️⃣ Updating Context in Any Component**

Inside Body.js: <br/>
```js
const { loggedInUser, setUserName } = useContext(UserContext);

<input
  value={loggedInUser}
  onChange={(e) => setUserName(e.target.value)}
/>
```

<br/>

**✔ What happens?**

Typing in the input → calls setUserName(...) <br/>

This updates the state in AppLayout <br/>

AppLayout re-renders → Provider gets new value <br/>

ALL children using this context get the updated username <br/>

<hr/>

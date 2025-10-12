## Basic Structure / Design of the Food-Delivery WebApp Project

-- Header
    - Logo
    - Nav-items
-- Body
    - Search
    - Restaurant Container
        - Restaurant Card
            - Image of the restaurant / food items
            - Name, Cuisines, Avg. Rating, Delivery Time 
-- Footer
    - Copyright
    - Social Media Links
    - Address
    - Contact

## Different way of using CSS in React

# 1. Using the external CSS File

With the external file , it is easy to maintain styling code of any element and we have to only add the link in the HTML page

# 2. Inline CSS in React

❌ In React elements we cannot directly add style tag and write properties to it

✅ In React, we have to make styles object and define all the properties in the form of key : value and then add the styles object to the style tag in the jsx file using "{}" as JS 

## React Props

⭕ Props are just properties of a react component.
⭕ Props are the data  we used to dynamically pass to a react component.
⭕ In simple words we can say that, props are just arguments to a react component.

## How to use props

 ➡️Props are JS objects at the end which contains the data you passed into the component.

 So in the react component we define data , we use "props" keyword in that functional component as parameter

 and to use the data we use "{}" to get props data as it is JS object so we have to use it as JS thing.

 ❗For Example : if we define <RestaurantCard resName = "KFC" cuisines = "Chicken"/> Here we defined props

 and in the functional component "RestaurantCard" , we use as : const RestaurantCard = (props) => {return {props.resName} }

➡️ Many Developers just destructure the props object as they pass like :

 const RestaurantCard = ({resName,cuisines}) => {return {resName}, {cuisine}}


 ## Config-Driven UI 

 ➡️ A Config-Driven UI is one where the layout and content are generated from configuration data (from backend) (like JSON) instead of being hard-coded.
     It allows for flexible, dynamic interfaces that can be modified without changing the core application logic.

 ➡️ A Config-Driven UI means the structure and nature of the UI are controlled by the data we used to get from the backend in the form of JSON.
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {

    // Local State Variable - Used to update the state of a component (UI part) not just data

    const [listOfRestaurants , setlistOfRestaurants] = useState([]);

    const[filterRestaurant , setfilterRestaurant] = useState([]);

    const[searchText, setSearchText] = useState("");

    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        const allCards = json?.data?.cards;
        let restaurants = [];

        for (const card of allCards) {
        const possible_restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (possible_restaurants) {
        restaurants = possible_restaurants;
        break;
      }
    };

        setlistOfRestaurants(restaurants);
        setfilterRestaurant(restaurants);
        
    };

    // Conditional Rendering

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={() => {
                        console.log(searchText);

                        const filtered = listOfRestaurants.filter((res) => {
                            return res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        });

                        setfilterRestaurant(filtered);

                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const TopResList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                    setfilterRestaurant(TopResList);
                }}
                >
                Top Rated Restaurants</button>   
            </div>
            <div className="res-container">  
                {
                  // Here we run a loop(map) to get all the restaurants with less code from the resList and give key as its unique ID
                filterRestaurant.map((restaurant) => (<Link key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.name}><RestaurantCard  resData = {restaurant}/> </Link>) // Whatever we define as key in props should be passed in components
                )}
            </div> 
        </div>
    )
}

/* Keys are very important part in React where more than 1 children is introduced as to identify between them.
  Without the keys , react will never differentiate among the updated child (added / deleted) and it will re-render all the children, so it will be very costly(takes more time)
  On the other hand if we have keys so we can differentiate among the children and react identifies which element to be rendered into the DOM

  Without keys   <<<<<   Index as keys   <<<<<   Unique IDs as keys
*/


export default Body;
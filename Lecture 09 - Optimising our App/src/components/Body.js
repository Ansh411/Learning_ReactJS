import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData.js";
import useOnlineStatus from "../hooks/useOnlineStatus.js";

const Body = () => {

    const { listOfRestaurants, filterRestaurant, searchText, setSearchText, searchRestaurants, filterTopRated } = useRestaurantData();

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
    return (
    <h1>Look's like you're offline ! Please check your internet connection </h1>
    );


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
                    <button onClick={searchRestaurants}>Search</button>
                </div>
                <button className="filter-btn" onClick={filterTopRated}>
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
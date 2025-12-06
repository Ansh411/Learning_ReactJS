import RestaurantCard, { withBadges } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData.js";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const Body = () => {

    const { listOfRestaurants, filterRestaurant, searchText, setSearchText, searchRestaurants, filterTopRated } = useRestaurantData();

    // console.log(listOfRestaurants);

    const RestaurantCardWithBadges = withBadges(RestaurantCard);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
    return (
    <h1 className="text-center mt-20 text-red-500 font-bold text-xl">Look's like you're offline ! Please check your internet connection </h1>
    );

    const {loggedInUser , setUserName} = useContext(UserContext);


    // Conditional Rendering

return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-orange-100 px-6 py-12">
      {/* Filter & Search */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            className="search-box px-4 py-2 rounded-lg border text-black bg-gray-50 border-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none w-full sm:w-64"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={searchRestaurants}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition"
          >
            Search
          </button>
        </div>

        <button
          onClick={filterTopRated}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition"
        >
          Top Rated Restaurants
        </button>
        <div>
        <label>User : </label>
        <input className="search-box px-4 py-2 rounded-lg border text-black bg-gray-50 border-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none w-full sm:w-64"
          placeholder="Enter Username..."
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCardWithBadges resData={restaurant} />

          </Link>
        ))}
      </div>
    </div>
  );
}

/* Keys are very important part in React where more than 1 children is introduced as to identify between them.
  Without the keys , react will never differentiate among the updated child (added / deleted) and it will re-render all the children, so it will be very costly(takes more time)
  On the other hand if we have keys so we can differentiate among the children and react identifies which element to be rendered into the DOM

  Without keys   <<<<<   Index as keys   <<<<<   Unique IDs as keys
*/


export default Body;
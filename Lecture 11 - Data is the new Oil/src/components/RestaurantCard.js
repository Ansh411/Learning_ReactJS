import { useContext } from "react";
import { RES_IMAGE_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

// This is another way of giving styles to any react element by using styles as object and pass it using "{}" as JS thing as we are not allowed to use it directly
const styles = {
    backgroundColor : "#f0f0f0"
};

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name , cuisines , avgRating , costForTwo , sla} = resData?.info;

    const { loggedInUser } = useContext(UserContext);

    

    return ( 
        <div className="res-card bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl flex flex-col">
            <img className="res-logo w-full h-40 object-cover"
            alt="res-img" 
            src={RES_IMAGE_URL + resData.info.cloudinaryImageId }></img>
       <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-500">{cuisines.join(", ")}</h4>   
        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="bg-emerald-500 text-white px-2 py-1 rounded-lg font-semibold flex items-center gap-1">
            {avgRating} <i className="fa-solid fa-star"></i>
          </span>
          <span className="text-gray-600">{costForTwo}</span>
          <span className="text-blue-600 font-medium">{sla.slaString}</span>
        </div>
        <h4 className="font-bold">User : {loggedInUser}</h4>
      </div>
        </div>
    )
};

// Higher Order Component

// input -> RestaurantCard => RestaurantCardUpdated

export const withBadges = (RestaurantCard) => {
  return function BadgeWrapper(props) {
    const info = props.resData?.info;

    const isVeg = info?.veg === true;
    const isBestSeller = info?.avgRating > 4.5;

    return (
      <div className="relative">
        
        {/* Veg Badge */}
        {isVeg && (
          <label className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            VEG
          </label>
        )}

        {/* Best Seller Badge */}
        {isBestSeller && (
          <label className="absolute top-2 right-2 bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            ❤️ Best Seller
          </label>
        )}

        {/* Original Card */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;
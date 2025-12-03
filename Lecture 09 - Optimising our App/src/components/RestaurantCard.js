import { RES_IMAGE_URL } from "../utils/constants.js";

// This is another way of giving styles to any react element by using styles as object and pass it using "{}" as JS thing as we are not allowed to use it directly
const styles = {
    backgroundColor : "#f0f0f0"
};

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name , cuisines , avgRating , costForTwo , sla} = resData?.info;
    return ( 
        <div className="res-card" style={styles}>
            <img className="res-logo"
            alt="res-img" 
            src={RES_IMAGE_URL + resData.info.cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <span>
            <h4>{avgRating}<i className="fa-solid fa-star"></i></h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            </span>
        </div>
    )
}

export default RestaurantCard;
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Error404 from "./ErrorPage";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { name } = useParams(); 

  const resInfo = useRestaurantMenu(name);

  if(resInfo == null) return <Shimmer />;

  if (resInfo == "not_found") return <Error404 />;

  // Get restaurant info
  const restaurantInfo = resInfo.cards.map((c) => c.card?.card?.info).find((info) => info !== undefined);

  const nameRes = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines || [];
  const costForTwoMessage = restaurantInfo?.costForTwoMessage;

  // Get menu items
  const regularCards = resInfo.cards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const recommendedCategory = regularCards?.find((c) => c.card?.card?.title === "Recommended");

  const itemCards = recommendedCategory?.card?.card?.itemCards || [];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">{nameRes}</h1>
        <p className="menu-subtitle">
          {cuisines.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      <h2 className="menu-section-title">Menu</h2>

      <ul className="menu-list">
        {itemCards.map((item) => (
          <li className="menu-item" key={item.card.info.id}>
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

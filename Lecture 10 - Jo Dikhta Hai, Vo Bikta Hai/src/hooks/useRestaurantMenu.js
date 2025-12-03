import { useEffect, useState } from "react";
import resMenuData from "../utils/mocks/resMenuData.json";

const useRestaurantMenu = (name) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [name]);

  const fetchMenu = () => {
    const restaurantCard = resMenuData?.data?.restaurants.find((rest) =>
      rest.cards.some(
        (cardObj) =>
          cardObj.card?.card?.info?.name === name
      )
    );

    if (!restaurantCard) {
      setResInfo("not_found");
      return;
    }

    setResInfo(restaurantCard);
  };

  return resInfo;
};

export default useRestaurantMenu;

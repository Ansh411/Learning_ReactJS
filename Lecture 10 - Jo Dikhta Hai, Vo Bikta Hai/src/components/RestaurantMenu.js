import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Error404 from "./ErrorPage";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { name } = useParams();
  const resInfo = useRestaurantMenu(name);

  if (resInfo == null) return <Shimmer />;
  if (resInfo === "not_found") return <Error404 />;

  // Extract restaurant info
  const restaurantInfo = resInfo.cards
    .map((c) => c.card?.card?.info)
    .find((info) => info !== undefined);

  const nameRes = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines || [];
  const costForTwoMessage = restaurantInfo?.costForTwoMessage;
  const avgRating = restaurantInfo?.avgRating;

  // Extract recommended items
  const regularCards =
    resInfo.cards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards;

  const recommendedCategory = regularCards?.find(
    (c) => c.card?.card?.title === "Recommended"
  );

  const itemCards = recommendedCategory?.card?.card?.itemCards || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Restaurant Header Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-orange-200/60 mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {nameRes}
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            {cuisines.join(", ")}
          </p>

          <div className="flex items-center gap-4 text-gray-600">
            <span className="font-semibold bg-orange-100 text-orange-600 px-3 py-1 rounded-xl shadow-sm">
              ⭐ {avgRating}
            </span>

            <span className="font-medium">{costForTwoMessage}</span>
          </div>
        </div>

        {/* Menu */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Recommended Dishes
        </h2>

        <div className="bg-white shadow-xl rounded-2xl border border-orange-200/60 p-6">
          <ul className="space-y-6">
            {itemCards.map((item) => {
              const info = item.card.info;
              const price = info.defaultPrice / 100 || info.price / 100;

              return (
                <li
                  key={info.id}
                  className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200 hover:shadow-md transition-all"
                >

                  {/* Item Name */}
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {info.name}
                    </span>

                    {info.description && (
                      <span className="text-sm text-gray-600 mt-1">
                        {info.description.substring(0, 90)}...
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <span className="text-lg font-bold text-orange-600">
                    ₹{price}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RestaurantMenu;

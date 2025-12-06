import { ITEM_IMG_CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between gap-4 py-5 border-b border-gray-100"
        >
          {/* Left Content */}
          <div className="w-[70%]">
            <h3 className="text-lg font-semibold">{item.name}</h3>

            <p className="text-gray-800 font-medium mt-1">
              ₹ {item.price / 100 || item.defaultPrice / 100}
            </p>

            {item.description && (
              <p className="text-gray-500 text-sm mt-2">
                {item.description}
              </p>
            )}
          </div>

          {/* Image */}
          {item.imageId && (
            <img
              src={ITEM_IMG_CDN_URL + item.imageId}
              alt={item.name}
              className="w-28 h-28 rounded-lg object-cover shadow"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
import { useContext, VFC } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../UI/Card";

export interface MeetupData {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const MeetupItem: VFC<MeetupData> = ({ id, title, image, address, description }) => {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorite({
        id: id,
        title: title,
        image: image,
        address: address,
        description: description,
      });
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <Card>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="py-5 space-y-2">
          <div className="font-semibold text-xl">{title}</div>
          <div>{address}</div>
          <div>{description}</div>
        </div>
        <div>
          <button className=" px-5 py-2 mb-5 text-white font-bold bg-red-700 rounded-lg" onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? `Remove from Favorites` : `To Favorites`}
          </button>
        </div>
      </Card>
    </div>
  );
};
export default MeetupItem;

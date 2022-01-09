import { useContext } from "react";
import MeetupList from "../components/Meetup/MeetupList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <div className="w-8/12">You got no favorites yet. Start adding some?</div>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" text-2xl py-5 w-8/12 font-bold">My Favorites</div>
      {content}
    </div>
  );
};

export default Favorites;

import React, { createContext, useState } from "react";
import Meetup from "../models/meetup";

interface InitialContext {
  favorites: Meetup[];
  totalFavorites: number;
  addFavorite: (meetupData: Meetup) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}

const defaultState: InitialContext = {
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetupData: Meetup) => {},
  removeFavorite: (meetupId: string) => {},
  itemIsFavorite: (meetupId: string) => {
    return true || false;
  },
};

const FavoritesContext = createContext<InitialContext>(defaultState);

export function FavoritesContextProvider({ children }: { children: React.ReactNode }) {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

  function addFavoriteHandler(meetupData: Meetup) {
    setUserFavorites((prev) => {
      return prev.concat(meetupData);
    });
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context: InitialContext = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}> {children}</FavoritesContext.Provider>;
}

export default FavoritesContext;

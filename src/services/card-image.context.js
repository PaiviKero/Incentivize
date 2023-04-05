import { createContext, useState, useContext } from "react";

export const CardImageContext = createContext();
import { QuoteContext } from "../services/quotes.context";

import { carddata } from "./card-images/card-data";

export const CardImageContextProvider = ({ children }) => {
  const { getRandomQuote } = useContext(QuoteContext);
  const defaultCardImages = [
    "https://loremflickr.com/320/240/brazil,rio",
    "https://loremflickr.com/320/240/beach",
    "https://loremflickr.com/320/240/sea",
    "https://loremflickr.com/320/240/lake",
    "https://loremflickr.com/320/240/flowers",
    "https://loremflickr.com/320/240/field",
  ];
  const [cardImageList, setCardImageList] = useState(defaultCardImages);

  const createDefaultCardImages = () => {
    setCardImageList(defaultcardImages);
  };

  const getRandomCardImage = () => {
    if (cardImageList === null) createDefaultCardImages();
    const randomIndex = Math.floor(Math.random() * cardImageList.length);
    return { uri: cardImageList[randomIndex] };
  };

  const getRandomCardImageLocal = () => {
    const randomIndex = Math.floor(Math.random() * carddata.length);
    return carddata[randomIndex].cardLink;
  };

  const getRandomCard = () => {
    const card = {
      imageLink: getRandomCardImageLocal(),
    };
    const card2 = {
      quote: getRandomQuote(),
      imageLink: getRandomCardImage(),
    };
    return card;
  };

  return (
    <CardImageContext.Provider
      value={{
        cardImageList,
        getRandomCard,
      }}
    >
      {children}
    </CardImageContext.Provider>
  );
};

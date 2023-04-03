import { createContext, useState } from "react";

export const CardImageContext = createContext();

export const CardImageContextProvider = ({ children }) => {
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
    return cardImageList[randomIndex];
  };

  return (
    <CardImageContext.Provider
      value={{
        cardImageList,
        getRandomCardImage,
      }}
    >
      {children}
    </CardImageContext.Provider>
  );
};

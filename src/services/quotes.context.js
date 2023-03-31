import { createContext, useState } from "react";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const defaultQuotes = [
    "In order to WIN, you need to BEGINN!",
    "Let Today Be the Start of Something New!",
    "Take a Deep Breath, Dust Yourself off and Start All Over Again",
    "Maybe it's not always about trying to fix something broken. Maybe it's about starting over and creating something better.",
    "There is a way to do it better - FIND it.",
  ];
  const [quoteList, setQuoteList] = useState(defaultQuotes);

  const createDefaultQuotes = () => {
    setQuoteList(defaultQuotes);
  };

  const getRandomQuote = () => {
    if (quoteList === null) createDefaultQuotes();
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
  };

  return (
    <QuoteContext.Provider
      value={{
        quoteList,
        getRandomQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

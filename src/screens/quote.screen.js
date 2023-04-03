import { useContext } from "react";

import { QuoteContext } from "../services/quotes.context";
import { CardImageContext } from "../services/card-image.context";
import { Card } from "../components/card";

export const QuoteScreen = () => {
  const { getRandomQuote } = useContext(QuoteContext);
  const { getRandomCardImage } = useContext(CardImageContext);

  return <Card quote={getRandomQuote()} uri={getRandomCardImage()}></Card>;
};

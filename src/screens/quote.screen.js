import { useContext } from "react";

import { QuoteContext } from "../services/quotes.context";
import { Card } from "../components/card";

export const QuoteScreen = () => {
  const { getRandomQuote } = useContext(QuoteContext);

  return <Card quote={getRandomQuote()}></Card>;
};

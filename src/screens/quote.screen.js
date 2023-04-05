import { useContext } from "react";

import { CardImageContext } from "../services/card-image.context";
import { Card } from "../components/card";

export const QuoteScreen = () => {
  const { getRandomCard } = useContext(CardImageContext);

  return <Card card={getRandomCard()}></Card>;
};

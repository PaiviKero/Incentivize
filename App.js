import { QuoteScreen } from "./src/screens/quote.screen";
import { CardImageContextProvider } from "./src/services/card-image.context";
import { QuoteContextProvider } from "./src/services/quotes.context";

export default function App() {
  return (
    <QuoteContextProvider>
      <CardImageContextProvider>
        <QuoteScreen></QuoteScreen>
      </CardImageContextProvider>
    </QuoteContextProvider>
  );
}

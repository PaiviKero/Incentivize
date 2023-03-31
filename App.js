import { QuoteScreen } from "./src/screens/quote.screen";
import { QuoteContextProvider } from "./src/services/quotes.context";

export default function App() {
  return (
    <QuoteContextProvider>
      <QuoteScreen></QuoteScreen>
    </QuoteContextProvider>
  );
}

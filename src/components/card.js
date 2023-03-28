import { Text } from "react-native";

export const Card = ({ quote = "test" }) => {
  return <Text variant="label">{quote}</Text>;
};

import {
  FlexView,
  CardBackgroundImage,
  CardTextView,
  CardText,
} from "./card.styles";

export const Card = ({ quote = "test" }) => {
  return (
    <FlexView>
      <CardBackgroundImage
        source={{
          uri: "https://loremflickr.com/320/240/brazil,rio",
        }}
      >
        <CardTextView>
          <CardText>{quote}</CardText>
        </CardTextView>
      </CardBackgroundImage>
    </FlexView>
  );
};

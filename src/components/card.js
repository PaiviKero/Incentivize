import {
  FlexView,
  CardBackgroundImage,
  CardTextView,
  CardText,
} from "./card.styles";

export const Card = ({ quote = "test", uri = null }) => {
  return (
    <FlexView>
      <CardBackgroundImage
        source={{
          uri: uri,
        }}
      >
        <CardTextView>
          <CardText>{quote}</CardText>
        </CardTextView>
      </CardBackgroundImage>
    </FlexView>
  );
};

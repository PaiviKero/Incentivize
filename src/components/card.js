import {
  FlexView,
  CardBackgroundImage,
  CardTextView,
  CardText,
} from "./card.styles";

export const Card = ({ card }) => {
  return (
    <FlexView>
      <CardBackgroundImage source={card.imageLink}>
        <CardTextView>
          <CardText>{card.quote}</CardText>
        </CardTextView>
      </CardBackgroundImage>
    </FlexView>
  );
};

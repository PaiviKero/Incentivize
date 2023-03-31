import styled from "styled-components/native";
import { ImageBackground, View, Text } from "react-native";

export const FlexView = styled(View)`
  flex: 1;
`;

export const CardBackgroundImage = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;

export const CardTextView = styled(View)`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CardText = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

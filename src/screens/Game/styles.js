import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";
import Icon from "react-native-vector-icons/FontAwesome";

export const HeaderGame = styled.View`
  width: 100%;
  flex: 3;
  flex-direction: row;
  background-color: ${colors.secondary};
`;

export const ImageGame = styled.Image`
  flex: 1;
  height: 300px;
  margin: 5px 0px 0px 5px;
  border-radius: 10px;
`;

export const HeaderInfoGame = styled.View`
  flex: 1;
  padding: 5px;
`;

export const PlatformsInfo = styled.View`
  flex: 1;
`;

export const TitlePlatforms = styled(TextDefault)`
  padding: 8px;
  font-weight: bold;
  border-left-width: 2px;
  border-left-color: ${colors.primary};
  color: black;
  margin-left: 5px;
`;

export const TextInfoPlatforms = styled(TextDefault)`
  padding: 4px;
  color: black;
  margin-left: 5px;
`;

export const ShopsInfo = styled.View`
  flex: 1;
`;

export const TitleShops = styled(TextDefault)`
  padding: 8px;
  font-weight: bold;
  border-left-width: 2px;
  border-left-color: ${colors.primary};
  color: black;
  margin-left: 5px;
`;

export const TextInfoShops = styled(TextDefault)`
  padding: 4px;

  color: black;
  margin-left: 5px;
`;

export const ContentGame = styled.View`
  width: 100%;
  flex: 2;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.secondary};
`;

export const TitleDescription = styled(TextDefault)`
  padding: 0px 8px 8px 8px;
  font-weight: bold;
  border-left-width: 2px;
  border-left-color: ${colors.primary};
  color: black;
  margin-left: 5px;
`;

export const TextDescription = styled(TextDefault)`
  padding: 0px 8px 8px 8px;
  color: black;
  margin-left: 5px;
`;

export const FooterGame = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 5px;
  background-color: ${colors.secondary};
`;

export const TextInfoPrice = styled(TextDefault)`
  font-weight: bold;
  font-size: 30px;
  color: ${colors.dark};
`;

export const IconComeBack = styled(Icon)`
  font-size: 30px;
  color: ${colors.secondary};
`;

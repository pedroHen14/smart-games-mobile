import styled from "styled-components/native";
import colors from "../../styles/colors";
import { StatusBar } from "react-native";
import { TextDefault } from "../../styles/stylesGlobal";
import Icon from "react-native-vector-icons/FontAwesome";

export const ContainerCamera = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  background-color: ${colors.dark};
`;

export const IconComeBack = styled(Icon)`
  font-size: 30px;
  color: ${colors.secondary};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${colors.dark};
  padding-top: ${StatusBar.currentHeight}px;
`;

export const ToolBar = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
  background-color: ${colors.primary};

  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const TextToolBar = styled(TextDefault)`
  flex: 1;
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: bold;
  text-align: center;
`;

export const ImageLogo = styled.Image`
  width: 60px;
  height: 60px;
  margin-top: 20px;
  border-radius: 30px;
  border-width: 2px;
  border-color: ${colors.light};
  z-index: 9;
`;

export const IconCamera = styled(Icon)`
  font-size: 30px;
  color: ${colors.secondary};
`;

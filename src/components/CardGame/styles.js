import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Container = styled.View`
  width: 96%;
  margin: 10px;
  min-height: 100px;

  background-color: ${colors.secondary};
  border-radius: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const ImageHeader = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const CardBody = styled.View`
  flex-direction: column;
  margin-top: 15px;
  padding: 10px;
`;

export const TextTitle = styled(TextDefault)`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 2px;
  color: black;
`;

export const TextInfoPrice = styled(TextDefault)`
  padding: 8px;
  font-weight: bold;
  border-left-width: 2px;
  border-left-color: ${colors.primary};
  color: black;
`;

import React from "react";
import {
  CardActionArea,
  CardBody,
  CardHeader,
  Container,
  ImageHeader,
  TextInfoDeveloper,
  TextInfoPrice,
  TextTitle,
} from "./styles";
import imgLogo from "../../../assets/hustle.png";
import { TouchableOpacity } from "react-native";

function CardGame({ games }) {
  return (
    <Container>
      <TouchableOpacity>
        <CardHeader>
          <ImageHeader source={{ uri: games.image }} />
        </CardHeader>
        <CardBody>
          <TextTitle>{games.name}</TextTitle>
          <TextInfoPrice>Preço: R${games.price},00</TextInfoPrice>
          <TextInfoDeveloper>
            Desenvolvedor: {games.developer}
          </TextInfoDeveloper>
        </CardBody>
      </TouchableOpacity>
    </Container>
  );
}

export default CardGame;

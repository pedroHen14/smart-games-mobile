import React from "react";
import {
  CardBody,
  CardHeader,
  Container,
  ImageHeader,
  TextInfoPrice,
  TextTitle,
} from "./styles";

import { TouchableOpacity } from "react-native";

function CardGame({ games, handlePress }) {
  return (
    <Container>
      <TouchableOpacity onPress={handlePress}>
        <CardHeader>
          <ImageHeader source={{ uri: games.image }} />
        </CardHeader>
        <CardBody>
          <TextTitle>{games.name}</TextTitle>
          <TextInfoPrice>
            Preço: R${" "}
            {games.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </TextInfoPrice>
        </CardBody>
      </TouchableOpacity>
    </Container>
  );
}

export default CardGame;

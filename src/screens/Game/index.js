import React, { useEffect, useState } from "react";
import { Alert, FlatList, StatusBar, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "../../styles/stylesGlobal";
import {
  ContentGame,
  FooterGame,
  HeaderGame,
  HeaderInfoGame,
  ImageGame,
  PlatformsInfo,
  ShopsInfo,
  TextDescription,
  TextInfoPrice,
  TextInfoShops,
  TitleShops,
  TitlePlatforms,
  TitleDescription,
  TextInfoPlatforms,
  IconComeBack,
} from "./styles";
import { getGame } from "../../services/security";
import { api } from "../../services/api";

function Game({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [game, setGame] = useState([]);

  const handleOrder = async (price, gameId) => {
    try {
      const response = await api.post("/order", {
        price: price,
        gameId: gameId,
      });

      Alert.alert(
        "Parabéns!!",
        "Seu pedido foi efetuado com sucesso, agora é só aguardar a entrega."
      );

      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  //Função que pega os dados armazenados no AsyncStorage e armazena na variável de estado
  const loadGame = async () => {
    const game = await getGame();

    setGame(game);
  };

  useEffect(() => {
    loadGame();
  }, []);

  return (
    <Container>
      <ToolBar>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ position: "absolute", left: 15, zIndex: 99 }}
        >
          <IconComeBack name="chevron-circle-left" />
        </TouchableOpacity>
        <TextToolBar>{game.name}</TextToolBar>
      </ToolBar>
      <HeaderGame>
        <ImageGame source={{ uri: game.image }} />
        <HeaderInfoGame>
          <PlatformsInfo>
            <TitlePlatforms>Plataformas</TitlePlatforms>
            <FlatList
              data={game.Platforms}
              style={{ width: "100%" }}
              keyExtractor={(platforms) => String(platforms.id)}
              renderItem={({ item: platforms }) => (
                <TextInfoPlatforms>- {platforms.name}</TextInfoPlatforms>
              )}
            />
          </PlatformsInfo>
          <ShopsInfo>
            <TitleShops>Lojas</TitleShops>
            <FlatList
              data={game.Shops}
              style={{ width: "100%" }}
              keyExtractor={(shops) => String(shops.id)}
              renderItem={({ item: shops }) => (
                <TextInfoShops>- {shops.name}</TextInfoShops>
              )}
            />
          </ShopsInfo>
        </HeaderInfoGame>
      </HeaderGame>
      <ContentGame>
        <TitleDescription>Descrição</TitleDescription>
        <TextDescription>{game.description}</TextDescription>
      </ContentGame>
      <FooterGame>
        <TextInfoPrice>
          R$ {game.discount > 0 ? game.price - game.price / 10 : game.price}
        </TextInfoPrice>
        <Button
          handlePress={() => handleOrder(game.price, game.id)}
          text={"Comprar"}
          style={{ width: "96%", backgroundColor: "green" }}
        />
      </FooterGame>
    </Container>
  );
}

export default Game;

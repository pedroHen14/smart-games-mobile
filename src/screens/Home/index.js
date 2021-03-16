import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import {
  Container,
  IconCamera,
  ImageLogo,
  TextToolBar,
  ToolBar,
} from "./styles";
import imgLogo from "../../../assets/hustle.png";
import CardGame from "../../components/CardGame";
import { api } from "../../services/api";
import { gameIn } from "../../services/security";

function Home({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [games, setGames] = useState([]);

  const loadGames = async () => {
    try {
      const response = await api.get("/games");

      setGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGame = async ({ id }) => {
    try {
      const response = await api.get(`/games/${id}`);

      gameIn(response.data);

      navigation.navigate("Game");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenCamera = () => {
    navigation.navigate("CameraOpen");
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <Container>
      <ToolBar>
        <TouchableOpacity style={{ position: "absolute", left: 4 }}>
          <ImageLogo source={imgLogo} />
        </TouchableOpacity>
        <TextToolBar>SMART GAMES</TextToolBar>
        <TouchableOpacity
          style={{ position: "absolute", right: 4 }}
          onPress={handleOpenCamera}
        >
          <IconCamera name="camera" />
        </TouchableOpacity>
      </ToolBar>
      <FlatList
        data={games}
        style={{ width: "100%" }}
        keyExtractor={(games) => String(games.id)}
        renderItem={({ item: games }) => (
          <CardGame games={games} handlePress={() => handleGame(games)} />
        )}
      />
    </Container>
  );
}

export default Home;

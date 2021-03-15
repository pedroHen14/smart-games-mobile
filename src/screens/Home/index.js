import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import { Container, ImageLogo, TextToolBar, ToolBar } from "./styles";
import imgLogo from "../../../assets/hustle.png";
import CardGame from "../../components/CardGame";
import { api } from "../../services/api";

function Home() {
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

  useEffect(() => {
    console.log("buscando games");
    loadGames();

    // const loadShops = async () => {
    //   try {
    //     const response = await api.get("/shops");

    //     setShops(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // loadShops();
  }, []);

  return (
    <Container>
      <ToolBar>
        <TouchableOpacity style={{ position: "absolute", left: 4 }}>
          <ImageLogo source={imgLogo} />
        </TouchableOpacity>
        <TextToolBar>SMART GAMES</TextToolBar>
      </ToolBar>
      <FlatList
        data={games}
        style={{ width: "100%" }}
        keyExtractor={(games) => String(games.id)}
        renderItem={({ item: games }) => <CardGame games={games} />}
      />
    </Container>
  );
}

export default Home;

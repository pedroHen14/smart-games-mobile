import React, { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import colors from "../../styles/colors";
import {
  Container,
  ContainerCamera,
  IconCamera,
  IconComeBack,
  ImageLogo,
  TextToolBar,
  ToolBar,
} from "./styles";
import imgLogo from "../../../assets/hustle.png";
import CardGame from "../../components/CardGame";
import { api } from "../../services/api";
import { gameIn } from "../../services/security";
import { BarCodeScanner } from "expo-barcode-scanner";

function Home({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [games, setGames] = useState([]);

  const [openCamera, setOpenCamera] = useState(false);

  const [scanned, setScanned] = useState(false);

  const loadGames = async () => {
    try {
      const response = await api.get("/games");

      setGames(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const codeScannerPermission = async () => {
    await BarCodeScanner.requestPermissionsAsync();
  };

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);

    const gameId = data.split("/").pop();

    const game = await api.get(`/games/${gameId}`);

    //Tratando caso o produto já esteja com desconto
    if (game.data.discount == 0) {
      const response = await api.put(data);

      Alert.alert(
        "Parabéns!!",
        `Você recebeu um desconto de ${response.data.discount}% no produto escolhido, agora é só efetuar a compra e aproveitar.`
      );

      setOpenCamera(!openCamera);

      setScanned(false);

      gameIn(response.data);

      navigation.navigate("Game");
    } else {
      Alert.alert("Erro!!", `Você já recebeu o desconto neste produto.`);

      setOpenCamera(!openCamera);

      setScanned(false);
    }
  };

  const handleGame = async ({ id }) => {
    try {
      const response = await api.get(`/games/${id}`);

      //Armazenando o jogo no AsyncStorage para transferir os valores para a outra página
      gameIn(response.data);
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Game");
  };

  useEffect(() => {
    loadGames();
    codeScannerPermission();
  }, []);

  return (
    <>
      {openCamera && (
        <ContainerCamera>
          <TouchableOpacity
            style={{ position: "absolute", left: 10, top: 40, zIndex: 99 }}
            onPress={() => {
              setOpenCamera(!openCamera);
              setScanned(false);
            }}
          >
            <IconComeBack name="chevron-circle-left" />
          </TouchableOpacity>
          <BarCodeScanner
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
        </ContainerCamera>
      )}
      <Container>
        <ToolBar>
          <TouchableOpacity style={{ position: "absolute", left: 4 }}>
            <ImageLogo source={imgLogo} />
          </TouchableOpacity>
          <TextToolBar>SMART GAMES</TextToolBar>
          <TouchableOpacity
            style={{ position: "absolute", right: 4 }}
            onPress={() => setOpenCamera(!openCamera)}
          >
            <IconCamera name="camera" />
          </TouchableOpacity>
        </ToolBar>
        <FlatList
          data={games}
          style={{ width: "100%", zIndex: 0 }}
          keyExtractor={(games) => String(games.id)}
          renderItem={({ item: games }) => (
            <CardGame games={games} handlePress={() => handleGame(games)} />
          )}
        />
      </Container>
    </>
  );
}

export default Home;

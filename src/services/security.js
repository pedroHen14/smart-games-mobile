import AsyncStorage from "@react-native-community/async-storage";

const GAME_KEY = "@game";

//Função para armazenar dados do jogo no AsyncStorage
export const gameIn = (game) => {
  AsyncStorage.setItem(GAME_KEY, JSON.stringify(game));
};

//Função que retorna dados do jogo que estão armazenados no AsyncStorage
export const getGame = async () => {
  const game = JSON.parse(await AsyncStorage.getItem(GAME_KEY));

  return game;
};

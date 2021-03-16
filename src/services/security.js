import AsyncStorage from "@react-native-community/async-storage";

const GAME_KEY = "@game";

export const gameIn = (game) => {
  AsyncStorage.setItem(GAME_KEY, JSON.stringify(game));
};

export const getGame = async () => {
  const game = JSON.parse(await AsyncStorage.getItem(GAME_KEY));

  return game;
};

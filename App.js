import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import backgroundImage from "./assets/images/backgroundImage.jpg";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// displays splash screen
SplashScreen.preventAutoHideAsync()
  .then((result) => {
    console.log("SplashScreen.preventAutoHideAsync() succeded!");
  })
  .catch(() => {
    console.log("catch");
  });

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(guessRoundsList) {
    setGameIsOver(true);
    setGuessRounds(guessRoundsList.length);
  };

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = userNumber ? (
    <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  ) : (
    <StartGameScreen onPickNumber={pickedNumberHandler} />
  );

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        noOfGuessRounds={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}r
      />
    );
  }

  if (fontsLoaded) {
    // hides splash screen
    SplashScreen.hideAsync();
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={backgroundImage}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={[styles.rootScreen, styles.androidSafeArea]}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

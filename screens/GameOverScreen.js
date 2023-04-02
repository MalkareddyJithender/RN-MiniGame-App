import { View, Text, StyleSheet, Image,Dimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({noOfGuessRounds,userNumber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title> Game Over !</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>{noOfGuessRounds}</Text> rounds to guess the Number {""}
        <Text style={styles.highLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height:deviceWidth < 380 ? 150 : 300,
    width:deviceWidth < 380 ? 150 : 300,
    borderColor: Colors.primary800,
    borderWidth: 3,
    borderRadius:deviceWidth < 380 ? 75 : 150,
    overflow: "hidden",
    marginVertical: 35,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText:{
    fontSize:22,
    textAlign:'center',
    fontFamily:'open-sans',
    marginBottom:24,
  },
  highLight:{
    fontFamily:'open-sans-bold',
    color: Colors.primary500
  }
});

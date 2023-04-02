import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";

function NumberContainer({ children }) {
  const { width } = useWindowDimensions();

  const spacingStyles = {
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
  };
  const fontSize = width < 380 ? 30 : 34;

  return (
    <View style={[styles.container, spacingStyles]}>
      <Text style={[styles.numberText, { fontSize }]}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.accent500,
    borderWidth: 4,
    borderRadius: 8,
    // padding:deviceWidth < 380 ? 12 : 24,
    // margin:deviceWidth < 380 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    // fontSize: deviceWidth < 380 ? 30 : 34,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});

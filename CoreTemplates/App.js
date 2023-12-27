import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";

const logoFile = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={{ color: "pink", fontSize: 40 }}>
          <Text style={{ color: "red", fontSize: 40 }}>1...</Text>2...
        </Text>
      </View>
      <View style={styles.view3}>
        {/* <Image source={logoFile} style={{ width: 300, height: 300 }} />
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        /> */}
        {/* <ImageBackground source={logoFile} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "plum",
  },
  view2: {
    width: 200,
    height: 200,
    backgroundColor: "lightblue",
  },
  view3: {
    backgroundColor: "lightgreen",
  },
});

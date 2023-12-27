import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

const logoFile = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.view1}>
      <ScrollView>
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
        <View style={styles.view4}>
          <ScrollView>
            <Image
              source={{ uri: "https://picsum.photos/300" }}
              style={{ width: 300, height: 300 }}
            />
            <Image
              source={{ uri: "https://picsum.photos/300" }}
              style={{ width: 300, height: 300 }}
            />
            <Image
              source={{ uri: "https://picsum.photos/300" }}
              style={{ width: 300, height: 300 }}
            />
            <Image
              source={{ uri: "https://picsum.photos/300" }}
              style={{ width: 300, height: 300 }}
            />
          </ScrollView>
        </View>
        <View style={styles.view5}>
          <Button
            title="PRESS"
            color="midnightblue"
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={styles.view6}>
          {/* Temos várias outras PROPS como onLongPress que podem ser úteis em alguns momentos */}
          <Pressable onPress={() => console.log("Image Pressed")}>
            <Image source={logoFile} style={{ height: 200, width: 200 }} />
          </Pressable>
        </View>
      </ScrollView>
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
    width: 200,
    height: 200,
    backgroundColor: "lightgreen",
  },
  view4: {
    width: 200,
    height: 200,
    backgroundColor: "lightyellow",
  },
  view5: {
    width: 200,
    height: 200,
    backgroundColor: "lightpink",
  },
  view6: {
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
  },
});

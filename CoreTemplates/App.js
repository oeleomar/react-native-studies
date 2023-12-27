import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={{ color: "pink", fontSize: 40 }}>
          <Text style={{ color: "red", fontSize: 40 }}>1...</Text>2...
        </Text>
      </View>
      <View style={styles.view3}></View>
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
});

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Suas metas" />
        <Button title="Adicionar Metas" style={styles.button} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  button: {
    flex: 1,
  },
});

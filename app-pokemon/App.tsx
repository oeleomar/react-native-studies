import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { Welcome } from "./src/screens/Welcome";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      <Welcome />
    </ThemeProvider>
  );
}

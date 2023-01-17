import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MotiView } from 'motify'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010100",
    alignItems: "center",
    justifyContent: "center",
  },
});

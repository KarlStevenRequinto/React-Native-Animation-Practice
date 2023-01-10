import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";
import { Easing } from "react-native-reanimated";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
              from={{ opacity:0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 300,
                repeatReverse:false,
                loop: true,
              }}
            />
          );
        })}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#6e01ef",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

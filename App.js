import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";

// npx expo install lottie-react-native

export default function App() {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay={true}
        ref={animation}
        style={styles.animation}
        source={require("./assets/My_Notification.json")}
      />
      <Button
        title="Restart Animation"
        onPress={() => {
          animation.current?.reset();
          animation.current?.play();
        }}
      />
      <StatusBar style="auto" />
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
  animation: {
    width: 200,
    height: 200,
  },
});

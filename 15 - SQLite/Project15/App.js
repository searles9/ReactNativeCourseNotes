import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { init } from "./util/database";
import AppLoading from "expo-app-loading";

export default function App() {
  const [dbInitalized, setDbInitalized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitalized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitalized) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});

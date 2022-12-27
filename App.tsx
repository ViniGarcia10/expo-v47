import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff'    
  }
});

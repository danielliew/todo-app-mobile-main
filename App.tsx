import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import useAuth from "./src/hooks/useAuth";
import { styles } from "./src/styles";

export default function App() {
  const { user, onLogin, onLogout } = useAuth();

  return user.loginToken ? (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Sign Out" onPress={onLogout} />
    </View>
  ) : (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Sign In" onPress={onLogin} />
    </View>
  );
}

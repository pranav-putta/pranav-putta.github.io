import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { StackParams } from "../../navigation";
import { Header } from "../../components/";

type NavigationProps = StackNavigationProp<StackParams, "Home">;

export function Home() {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import { StyleSheet, View, Image, Text, Animated } from "react-native";
import colors from "../assets/colors";

export class Header extends React.Component {
  private animation: Animated.Value;
  private headerOpacity: Animated.AnimatedInterpolation;
  private line: Animated.AnimatedInterpolation;

  constructor(props: any) {
    super(props);

    this.animation = new Animated.Value(0);
    this.headerOpacity = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    this.line = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 160],
    });
  }

  componentDidMount() {
    Animated.timing(this.animation, {
      toValue: 1,
      useNativeDriver: true,
      delay: 500,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.headerContainer, { opacity: this.headerOpacity }]}
        >
          <View style={[styles.headerTextContainer]}>
            <Text style={styles.headerText}>PRANAV PUTTA</Text>
            <Animated.View
              style={{
                width: this.line,
                marginTop: 5,
                height: 4,
                marginLeft: 2,
                backgroundColor: colors.active,
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{ flex: 1, width: "100%", height: "100vh" }}
              source={require("../assets/images/me2.jpg")}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerText: {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 10,
  },
  headerCaptionText: {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "100",
    marginTop: 10,
    textAlign: "left",
  },
  headerContainer: {
    width: "100%",
    //maxWidth: 1000,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerTextContainer: {
    justifyContent: "center",
    flex: 1,
    marginLeft: "10%",
  },
  profile: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "white",
  },
});

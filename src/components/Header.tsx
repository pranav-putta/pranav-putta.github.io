import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

interface Props {
  scrollToProjects: () => void;
  scrollDown: () => void;
}
interface State {}

export class Header extends React.Component<Props, State> {
  private animation: Animated.Value;
  private headerOpacity: Animated.AnimatedInterpolation;
  private line: Animated.AnimatedInterpolation;
  private borderRadius: Animated.AnimatedInterpolation;

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
    this.borderRadius = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10],
    });
  }

  Button = (label: string, bgColor: string, click: () => void) => {
    return (
      <AnimatedTouchableOpacity
        style={{
          width: 120,
          height: 40,
          borderRadius: this.borderRadius,
          backgroundColor: bgColor,
          marginLeft: 2,
          marginRight: 20,
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "white",
        }}
        onPress={click}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
          {label}
        </Text>
      </AnimatedTouchableOpacity>
    );
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animation, {
        toValue: 1,
        useNativeDriver: true,
        delay: 500,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <ParallaxLayer offset={0} speed={0.25}>
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100vh",
              resizeMode: "center",
            }}
            source={require("../assets/images/t2.jpg")}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
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
                  backgroundColor: colors.primary,
                }}
              />
              <View style={{ flexDirection: "row" }}>
                {this.Button(
                  "My Projects",
                  colors.primary,
                  this.props.scrollToProjects
                )}
                {this.Button("Contact Me", colors.accent, () => {})}
              </View>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                backgroundColor: "white",
                padding: 10,
                borderRadius: 40,
                left: "10%",
                bottom: "10%",
              }}
              onPress={this.props.scrollDown}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("../assets/images/arrow-down.svg")}
              />
            </TouchableOpacity>
          </Animated.View>
        </ParallaxLayer>
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
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerTextContainer: {
    justifyContent: "center",
    flex: 2,
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

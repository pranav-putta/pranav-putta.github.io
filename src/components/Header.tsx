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
  private secondAnimation: Animated.Value;
  private headerOpacity: Animated.AnimatedInterpolation;
  private imageOpacity: Animated.AnimatedInterpolation;
  private line: Animated.AnimatedInterpolation;
  private borderRadius: Animated.AnimatedInterpolation;

  constructor(props: any) {
    super(props);

    this.animation = new Animated.Value(0);
    this.secondAnimation = new Animated.Value(0);
    this.headerOpacity = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    this.line = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200],
    });
    this.borderRadius = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 5],
    });
    this.imageOpacity = this.secondAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
  }

  Button = (label: string, bgColor: string, click: () => void) => {
    return (
      <AnimatedTouchableOpacity
        style={{
          width: 150,
          height: 50,
          borderRadius: this.borderRadius,
          backgroundColor: bgColor,
          marginLeft: 2,
          marginRight: 20,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "white",
        }}
        onPress={click}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>
          {label}
        </Text>
      </AnimatedTouchableOpacity>
    );
  };

  componentDidMount() {
    Animated.stagger(600, [
      Animated.timing(this.animation, {
        toValue: 1,
        useNativeDriver: true,
        delay: 500,
      }),
      Animated.timing(this.secondAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1000,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <ParallaxLayer offset={0} speed={0.2}>
          <Animated.Image
            style={{
              flex: 1,
              width: "100%",
              height: "100vh",
              resizeMode: "center",
              opacity: this.imageOpacity,
              marginLeft: "15%",
            }}
            source={require("../assets/images/t2.jpg")}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          <Animated.View
            style={[styles.headerContainer, { opacity: this.headerOpacity }]}
          >
            <View style={[styles.headerTextContainer]}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerText}>PRANAV</Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontSize: 40,
                    fontWeight: "bold",
                    letterSpacing: 10,
                    marginLeft: 10,
                  }}
                >
                  PUTTA
                </Text>
              </View>
              <Animated.View
                style={{
                  width: this.line,
                  marginTop: 5,
                  height: 2,
                  marginLeft: 2,
                  backgroundColor: colors.accent,
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
    fontWeight: "300",
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

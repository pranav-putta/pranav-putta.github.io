import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { StackParams } from "../../navigation";
import { Header } from "../../components/";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { ProjectsSection } from "./ProjectsSection";
import colors from "../../assets/colors";

type NavigationProps = StackNavigationProp<StackParams, "Home">;

export function Home() {
  const { navigate } = useNavigation<NavigationProps>();
  let parallax: Parallax | null;
  return (
    <Parallax pages={2} ref={(ref) => (parallax = ref)}>
      <ParallaxLayer offset={0} speed={0}>
        <Header
          scrollToProjects={() => {
            parallax?.scrollTo(1);
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0}>
        <ProjectsSection
          projects={[
            {
              color: colors.primary,
              name: "Odyssey",
              description:
                "A voting application aimed at bridgint the current gap that exists between representatives and their constituents",
              url: "https://github.com/pranavputta22/odyssey",
            },
            {
              color: colors.primary,
              name: "Mathscript",
              description:
                "A lightweight scripting language for mathematical calculations",
              url: "https://pranavputta22.github.io/mathscript",
            },
          ]}
        />
      </ParallaxLayer>
    </Parallax>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

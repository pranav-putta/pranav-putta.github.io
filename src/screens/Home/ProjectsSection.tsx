import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

interface Project {
  name: string;
  description: string;
  color: string;
  cols?: number;
  url: string;
}

interface Props {
  projects: Project[];
}
interface State {}

export class ProjectsSection extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <GridList
          cellHeight={160}
          cols={2}
          style={{
            width: "100%",
            height: "100vh",
            flex: 1,
          }}
        >
          {this.props.projects.map((project) => {
            return (
              <GridListTile
                style={{ height: 300, padding: 20 }}
                key={project.name}
                cols={project.cols || 1}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    backgroundColor: project.color,
                    borderRadius: 20,
                  }}
                  onPress={() => {
                    window.open(project.url, "_self");
                  }}
                ></TouchableOpacity>
                <GridListTileBar
                  style={{ padding: "2%" }}
                  title={project.name}
                  subtitle={
                    <Text style={{ color: "white", fontSize: 12 }}>
                      {project.description}
                    </Text>
                  }
                />
              </GridListTile>
            );
          })}
        </GridList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: "15%",
  },
});

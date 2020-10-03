import React from "react";
import { StyleSheet } from "react-native";
import { Svg, Text, Rect } from "react-native-svg";

interface Props {
  height: number;
  width: number;
  color: string;
  textColor: string;
  label: string;
  style: any;
}
interface State {}

export class AnimatedButton extends React.Component<Props, State> {
  render() {
    return (
      <Svg
        style={this.props.style}
        height={this.props.height}
        width={this.props.width}
      >
        <Rect
          rx={10}
          ry={10}
          width="100%"
          height="100%"
          fill={this.props.color}
        ></Rect>
        <Text
          x={this.props.width / 2}
          y={(this.props.height * 3) / 5}
          textAnchor="middle"
          fontWeight="bold"
          fill={this.props.textColor}
        >
          {this.props.label}
        </Text>
      </Svg>
    );
  }
}

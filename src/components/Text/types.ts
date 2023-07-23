export type palette = "main" | "neutral";
export type intensity = "050" | "100" | "150" | "200" | "250";
export type type = "h" | "b";
export type scale = 1 | 2 | 3;

export type color = {
  palette: palette;
  intensity: intensity;
};

export interface ISize {
  type: type;
  scale: scale;
}

export interface IColors {
  dark?: color;
  light?: color;
  default?: color;
}

interface TextProps {
  size?: ISize;
  colors?: IColors;
}

export default TextProps;

import { boxStyle } from "./Box.css";

interface textProps {
  text: string;
}

export const Box = ({ text }: textProps) => {
  return <div className={boxStyle}>{text}</div>;
};

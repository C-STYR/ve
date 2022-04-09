import { miniBoxStyle } from "./MiniBox.css";

interface textProps {
  text: string;
}

export const MiniBox = ({ text }: textProps) => {
  return <div className={miniBoxStyle}>{text}</div>;
};

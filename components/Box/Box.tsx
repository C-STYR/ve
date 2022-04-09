import { boxStyle } from "./Box.css";
import { vars } from '../../styles/_app.css'

interface textProps {
  text: string;
}

export const Box = ({ text }: textProps) => {
  return <div className={boxStyle}>{text}</div>;
};

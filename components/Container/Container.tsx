import { flexy, centered } from "./container.css";
import cn from "classnames";

interface containerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: containerProps) => {
  return <div className={centered}>{children}</div>;
};

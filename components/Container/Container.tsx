import { flexy, centered } from "./Container.css";
import cn from "classnames";

interface containerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: containerProps) => {
  return <div className={cn(flexy, centered)}>{children}</div>;
};

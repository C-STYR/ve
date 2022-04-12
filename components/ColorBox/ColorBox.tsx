import { colors, colorBoxStyle } from "../../styles/variants.css"

interface ColorBoxProps {
  color: keyof typeof colors;
  text?: string;
}

export const ColorBox = ({ color, text }: ColorBoxProps) => {
  return (
    <div className={colorBoxStyle[color]}>{text}</div>
  )
}
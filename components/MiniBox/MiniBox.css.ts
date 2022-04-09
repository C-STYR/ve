import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/_app.css'; //imported explicitly 

export const miniBoxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 50,
  width: 50,
  color: vars.color.brand,
  fontSize: "18px",
  backgroundColor: "#2E2E34",
  border: '1px solid white',
  borderRadius: '2px'
});

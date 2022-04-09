import { style } from "@vanilla-extract/css";

export const flexy = style({
  display: "flex",
});

export const centered = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  border: '1px dotted red',
});

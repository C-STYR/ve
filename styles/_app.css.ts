import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";


// imported in _app.tsx - applies everywhere
globalStyle("html, body", {
  background: "#18181B",
  margin: 0,
});



export const vars = createGlobalTheme(':root', {
  color: {
    brand: '#4D699E'
  },
  font: {
    body: 'arial'
  }
})
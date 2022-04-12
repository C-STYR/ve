import { style, styleVariants } from '@vanilla-extract/css'

const colors = {
  'dark-purple': '#512FC9',
  'light-purple': "#651FFF",
}

const sharedButtonStyles = style({
  display: 'inline-flex',
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  borderStyle: "solid",
  borderRadius: '8px',
  marginBottom: '10px',
  borderWidth: '1px'
})


//essentially, styleVariants enforce the use of the exported style
//name with one of the listed keys
export const ButtonVariants = styleVariants({
  primary: [sharedButtonStyles, {
    backgroundColor: colors['dark-purple'],
    borderColor: colors['dark-purple'],
    color: 'white'
  }], 
  secondary: [sharedButtonStyles, {
    backgroundColor: 'white',
    borderColor: colors['dark-purple'],
    color: colors['dark-purple']
  }],
  tertiary: [sharedButtonStyles, {
    background: 'transparent',
    borderColor: colors['light-purple'],
    color: colors['light-purple']
  }]
})
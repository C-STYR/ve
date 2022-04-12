import { styleVariants, style } from "@vanilla-extract/css";

export const colors = {
  lavender: '#D18DF0',
  green: '#BDE666',
  periwinkle: '#77A7FF',
  red: '#FF555D', 
  yellow: '#F6E183'
}

const shared = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  borderRadius: '4px',
  height: '60px',
  width: '60px',
  borderWidth: '1px',
  borderStyle: 'solid'
})

export const colorBoxStyle = styleVariants({
  lavender: [shared, {
    color: colors.lavender,
    borderColor: colors.green
  }],
  green: [shared, {
    color: colors.green,
    borderColor: colors.periwinkle
  }],
  periwinkle: [shared, {
    color: colors.periwinkle,
    borderColor: colors.red
  }], 
  red: [shared, {
    color: colors.red,
    borderColor: colors.yellow
  }], 
  yellow: [shared, {
    color: colors.yellow,
    borderColor: colors.lavender
  }]
})
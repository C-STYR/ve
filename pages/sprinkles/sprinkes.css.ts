import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css'

export const container = style({
  margin: '40px',
  display: 'block',
  color: 'white'
})

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px'
};

const fontSizes = {
  teeny: '10px',
  middling: '20px',
  BSD: '40px'
}

export const colors = {
  lavender: '#D18DF0',
  green: '#BDE666',
  periwinkle: '#77A7FF',
  red: '#FF555D', 
  yellow: '#F6E183'
}

const responsiveProperties = defineProperties({
  //based on these conditions
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',

  //ooh yes
  responsiveArray: ['mobile', 'tablet', 'desktop'],

  //these properties can be mapped accordingly
  properties: {
    padding: space, 
    margin: space,
    fontSize: fontSizes,
    color: colors,
  }
});

export const sprinkles = createSprinkles(responsiveProperties)
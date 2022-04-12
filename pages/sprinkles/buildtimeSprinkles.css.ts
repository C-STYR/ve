import { sprinkles } from './sprinkes.css';


// this is the buildtime version
// for runtime, sprinkles could be imported in .tsx file
export const BTSprinkles = sprinkles({
  fontSize: {
    mobile: 'teeny',
    tablet: 'middling',
    desktop: 'BSD'
  }, 
  color: ['green', 'lavender', 'periwinkle']
})
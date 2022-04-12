import type { NextPage } from 'next'
import { container} from './sprinkes.css'
import { BTSprinkles } from './buildtimeSprinkles.css'


const Sprinkles: NextPage = () => {
  return (
    <div className={container}>
      <div className={BTSprinkles}>
        TESTING TESTING TESTING
      </div>

    </div>
  )
}

export default Sprinkles;
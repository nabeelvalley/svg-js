import AnimationGenericAttriute, {
  AnimationGeneric,
} from './AnimationGenericAttribute'
import AnimationTimingAttribute, { AnimationTiming } from './AnimationTiming'
import AnimationValueAttribute, {
  AnimationValue,
} from './AnimationValueAttribute'
import GlobalAttribute, { Global } from '../GlobalAttribute'

/**
 * SVG Animation element attributes
 */
export interface Animation
  extends Global,
    AnimationGeneric,
    AnimationTiming,
    AnimationValue {}

/**
 * SVG Animation element attributes
 */
type AnimationAttribute =
  | AnimationGenericAttriute
  | AnimationTimingAttribute
  | AnimationValueAttribute
  | GlobalAttribute

export default AnimationAttribute

import AnimationGenericAttributeName, {
  AnimationGenericAttribute,
} from './AnimationGenericAttribute'
import AnimationTimingAttributeName, {
  AnimationTimingAttribute,
} from './AnimationTiming'
import AnimationValueAttributeName, {
  AnimationValueAttribute,
} from './AnimationValueAttribute'
import GlobalAttributeName, { Global } from '../GlobalAttribute'

/**
 * SVG Animation element attributes
 */
export interface AnimationAnimateAttribute
  extends Global,
    AnimationGenericAttribute,
    AnimationTimingAttribute,
    AnimationValueAttribute {}

/**
 * SVG Animation element attributes
 */
export type AnimationAnimateAttributeName =
  | AnimationGenericAttributeName
  | AnimationTimingAttributeName
  | AnimationValueAttributeName
  | GlobalAttributeName

export default AnimationAnimateAttributeName

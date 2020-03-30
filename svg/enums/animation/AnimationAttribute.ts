import AnimationGenericAttriute from './AnimationGenericAttribute'
import AnimationTimingAttribute from './AnimationTiming'
import AnimationValueAttribute from './AnimationValueAttribute'
import SVGGlobalAttribute from '../SVGGlobalAttribute'

/**
 * SVG Animation element attributes
 */
type AnimationAttribute =
  | AnimationGenericAttriute
  | AnimationTimingAttribute
  | AnimationValueAttribute
  | SVGGlobalAttribute

export default AnimationAttribute

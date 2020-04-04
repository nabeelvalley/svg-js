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
 * Motion Attributes for `animateMotion` SVG element
 */
export interface AnimateMotionAttribute {
  /**
   * A  number in the range [0, 1] for how the ibject is along it's path for each `keyTimes` attribute
   */
  keyPoints?: number
  /**
   * Path for the motion, using the same path as the `d` attribute for a `path` element, you can use the `PathBuilder` to build this path
   */
  path?: string
  /**
   * The rotation applied to the element, usually to point it in the direction of the animation path
   */
  rotate?: number | 'auto' | 'auto-reverse'
}

export enum AnimationAnimateMotionName {
  /**
   * A  number in the range [0, 1] for how the ibject is along it's path for each `keyTimes` attribute
   */
  keyPoints = 'keyPoints',
  /**
   * Path for the motion, using the same path as the `d` attribute for a `path` element, you can use the `PathBuilder` to build this path
   */
  path = 'path',
  /**
   * The rotation applied to the element, usually to point it in the direction of the animation path
   */
  rotate = 'rotate',
}

export interface AnimateMotion {
  /**
   * A  number in the range [0, 1] for how the ibject is along it's path for each `keyTimes` attribute
   */
  keyPoints?: number
  /**
   * Path for the motion, using the same path as the `d` attribute for a `path` element, you can use the `PathBuilder` to build this path
   */
  path?: string
  /**
   * The rotation applied to the element, usually to point it in the direction of the animation path
   */
  rotate?: number | 'auto' | 'auto-reverse'
}

/**
 * SVG `animateMotion` element attributes
 */
export interface AnimationAnimateMotionAttribute
  extends Global,
    AnimationGenericAttribute,
    AnimationTimingAttribute,
    AnimationValueAttribute,
    AnimateMotionAttribute {}

/**
 * SVG `animateMotion` element attributes
 */
export type AnimationMotionAttributeName =
  | AnimationGenericAttributeName
  | AnimationTimingAttributeName
  | AnimationValueAttributeName
  | GlobalAttributeName

export default AnimationAnimateMotionAttribute

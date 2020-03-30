/**
 * Timing Attributes for SVG Animation Elements
 */
export interface AnimationTiming {
  begin?: string
  dur?: string
  end?: string
  min?: string
  max?: string
  restart?: string
  repeatCount?: string
  repeatDur?: string
  fill?: string
}

/**
 * Timing Attributes for SVG Animation Elements
 */
enum AnimationTimingAttribute {
  begin = 'begin',
  dur = 'dur',
  end = 'end',
  min = 'min ',
  max = 'max ',
  restart = 'restart ',
  repeatCount = 'repeatCount ',
  repeatDur = 'repeatDur ',
  fill = 'fill ',
}

export default AnimationTimingAttribute

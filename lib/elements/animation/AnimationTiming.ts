/**
 * Timing Attributes for SVG Animation Elements
 */
export interface AnimationTimingAttribute {
  begin?: string
  dur?: string
  end?: string
  min?: string
  max?: string
  restart?: string
  repeatCount?: number | 'indefinite'
  repeatDur?: string
  fill?: string
}

/**
 * Timing Attributes for SVG Animation Elements
 */
enum AnimationTimingAttributeName {
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

export default AnimationTimingAttributeName

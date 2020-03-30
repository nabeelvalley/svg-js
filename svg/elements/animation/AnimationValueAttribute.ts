/**
 * Value Attributes for SVG Animation Elements
 */
export interface AnimationValue {
  calcMode?: string
  values?: string
  keyTimes?: string
  keySplines?: string
  from?: string
  to?: string
  by?: string
}

/**
 * Value Attributes for SVG Animation Elements
 */
enum AnimationValueAttribute {
  calcMode = 'calcMode ',
  values = 'values ',
  keyTimes = 'keyTimes ',
  keySplines = 'keySplines ',
  from = 'from ',
  to = 'to ',
  by = 'by ',
}

export default AnimationValueAttribute

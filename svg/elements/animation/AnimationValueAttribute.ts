/**
 * Value Attributes for SVG Animation Elements
 */
export interface AnimationValueAttribute {
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
enum AnimationValueAttributeName {
  calcMode = 'calcMode ',
  values = 'values ',
  keyTimes = 'keyTimes ',
  keySplines = 'keySplines ',
  from = 'from ',
  to = 'to ',
  by = 'by ',
}

export default AnimationValueAttributeName

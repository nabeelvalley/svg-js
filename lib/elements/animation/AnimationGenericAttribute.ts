import GenericShapeAttributeName from '../shape/GenericShapeAttributeName'

/**
 * Generic Attributes for SVG Animation Elements
 */
export interface AnimationGenericAttribute {
  attributeName?: string | GenericShapeAttributeName
  additive?: string
  accumulate?: string
}

/**
 * Generic Attributes for SVG Animation Elements
 */
enum AnimationGenericAttributeName {
  attributeName = 'attributeName ',
  additive = 'additive ',
  accumulate = 'accumulate ',
}

export default AnimationGenericAttributeName

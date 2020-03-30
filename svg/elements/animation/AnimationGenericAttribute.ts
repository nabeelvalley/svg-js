/**
 * Generic Attributes for SVG Animation Elements
 */
export interface AnimationGeneric {
  attributeName?: string
  additive?: string
  accumulate?: string
}

/**
 * Generic Attributes for SVG Animation Elements
 */
enum AnimationGenericAttriute {
  attributeName = 'attributeName ',
  additive = 'additive ',
  accumulate = 'accumulate ',
}

export default AnimationGenericAttriute

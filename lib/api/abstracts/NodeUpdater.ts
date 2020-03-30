import ElementType from '../../elements/ElementType'
import objectToKeyValueArray from '../../generic/functions/objectToKeyValuePair'
import KeyValuePair from '../../generic/KeyValuePair'
import createSVGElement from '../../generic/functions/createSVGElement'
import Exceptions from '../../generic/enums/Exceptions'
import { AnimationAttribute } from '../../elements/animation/AnimationAttribute'
import { AnimationGenericAttribute } from '../../elements/animation/AnimationGenericAttribute'
/**
 * Interface for adding special nodes to SVG Elements
 */
abstract class NodeUpdater {
  /**
   * Method to get the current working node when using the update functonality
   */
  protected abstract getWorkingNode(): SVGElement

  /**
   * Add an `animate` to the last created element. Will create either a new animate object with the provided attributes or simply append a given animation
   * @param animation an SVG `animate` element or the list of attributes of one
   */
  public addAnimation(animation: AnimationAttribute | SVGAnimateElement): this {
    return this.handleLastNodeAppend(
      ElementType.animate,
      animation instanceof SVGAnimateElement
        ? animation
        : objectToKeyValueArray(animation)
    )
  }

  /**
   * Handle the appending of an SVG Element or Attribute List of an element to the last created node
   * @param type SVG Element Type to be appended
   * @param data an SVG Element or the list of attributes of one
   */
  private handleLastNodeAppend(
    type: ElementType,
    data: KeyValuePair<string, number | string>[] | SVGElement
  ): this {
    const workingNode = this.getWorkingNode()

    if (!workingNode) throw Exceptions.nodeNull
    else if (data instanceof SVGElement) {
      workingNode.appendChild(data)
    } else {
      const newNode = createSVGElement(type)

      data?.forEach(attribute =>
        newNode.setAttribute(attribute?.key, attribute?.value.toString())
      )

      workingNode.appendChild(newNode)
    }

    return this
  }
}

export default NodeUpdater

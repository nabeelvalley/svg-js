import NodeUpdater from './NodeUpdater'
import ElementType from '../../elements/ElementType'
import KeyValuePair from '../../generic/KeyValuePair'
import Exceptions from '../../generic/enums/Exceptions'
import createSVGElement from '../../generic/functions/createSVGElement'
import BasicPainter from './BasicPainter'
import ClipPathAtttribute from '../../elements/clipPath/ClipPathAttribute'
import objectToKeyValueArray from '../../generic/functions/objectToKeyValuePair'

export default abstract class NodeWrapper extends BasicPainter {
  /**
   * Method to set the current working node when using the update functonality
   */
  protected abstract setWorkingNode(node: SVGElement): void

  /**
   * Wrap the working node in the defined ClipPath element
   * @param clip properties for the `clipPath` element
   */
  public applyClipPath(clip: ClipPathAtttribute | SVGClipPathElement): this {
    return this.handleLastNodeWrap(
      ElementType.clipPath,
      clip instanceof SVGClipPathElement ? clip : objectToKeyValueArray(clip)
    )
  }

  /**
   * Wrap a given child node with the given SVG Element or Element Attributes
   * @param type type for wrapper element
   * @param data key value pair of attributes or new SVG element
   */
  private handleLastNodeWrap(
    type: ElementType,
    data: KeyValuePair<string, number | string>[] | SVGElement
  ): this {
    const workingNode = this.getWorkingNode()

    if (!workingNode) throw Exceptions.nodeNull
    else if (data instanceof SVGElement) {
      data.appendChild(workingNode)
    } else {
      const newNode = createSVGElement(type)

      data?.forEach(attribute =>
        newNode.setAttribute(attribute?.key, attribute?.value.toString())
      )

      newNode.appendChild(workingNode)
    }

    this.setWorkingNode(workingNode)

    return this
  }
}

import SVGManager from '../svg/api/SVGManager'
import SVGElementType from '../svg/enums/SVGElementType'
import SVGAttribute from '../svg/enums/SVGAttribute'

const renderManager = (node: HTMLElement) => {
  let root = new SVGManager({
    parent: node,
    id: 'manager-view',
    attributes: [
      { key: SVGAttribute.height, value: '120' },
      { key: SVGAttribute.width, value: '90vw' },
    ],
  })

  let background = new SVGManager({
    parent: root,
    id: 'background',
    type: SVGElementType.rect,
    attributes: [
      { key: SVGAttribute.height, value: '100' },
      { key: SVGAttribute.width, value: '80vw' },
      { key: SVGAttribute.fill, value: 'blue' },
    ],
  })

  let snake = new SVGManager({
    id: 'snake',
    parent: root,
    type: SVGElementType.g,
    attributes: [
      { key: SVGAttribute.height, value: '20px' },
      { key: SVGAttribute.width, value: '20px' },
    ],
  })

  let sement = new SVGManager({
    id: 'segment',
    parent: snake,
  })

  let food = new SVGManager({
    class: 'food',
    parent: root,
    type: SVGElementType.circle,
    attributes: [
      { key: SVGAttribute.r, value: '5px' },
      { key: SVGAttribute.cx, value: '2cm' },
      { key: SVGAttribute.cy, value: '50px' },
      { key: SVGAttribute.fill, value: 'red' },
    ],
  })
}

export default renderManager

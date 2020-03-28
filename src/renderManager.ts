import SVGManager from '../svg/api/SVGManager'
import SVGElementType from '../svg/enums/SVGElementType'
import SVGAttribute from '../svg/enums/SVGAttribute'

const renderManager = (node: HTMLElement) => {
  let root = new SVGManager({
    parent: node,
    id: 'manager-view',
    attributes: [
      { name: SVGAttribute.height, value: '120' },
      { name: SVGAttribute.width, value: '90vw' },
    ],
  })

  let background = new SVGManager({
    parent: root,
    id: 'background',
    type: SVGElementType.rect,
    attributes: [
      { name: SVGAttribute.height, value: '100' },
      { name: SVGAttribute.width, value: '80vw' },
      { name: SVGAttribute.fill, value: 'blue' },
    ],
  })

  let snake = new SVGManager({
    id: 'snake',
    parent: root,
    type: SVGElementType.g,
    attributes: [
      { name: SVGAttribute.height, value: '20px' },
      { name: SVGAttribute.width, value: '20px' },
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
      { name: SVGAttribute.r, value: '5px' },
      { name: SVGAttribute.cx, value: '2cm' },
      { name: SVGAttribute.cy, value: '50px' },
      { name: SVGAttribute.fill, value: 'red' },
    ],
  })
}

export default renderManager

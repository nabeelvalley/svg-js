import GenericShapeAttributeName from '../../lib/elements/shape/GenericShapeAttributeName'
import { AnimationAttribute } from '../../lib/elements/animation/AnimationAttribute'
import { SVGPainter } from '../../lib'

const renderPainter = (node: HTMLElement) => {
  const generateFlowerSequence = (x, y) => {
    return (painter: SVGPainter) => {
      const radius = 10

      painter
        .setStroke('none')
        .setFill('yellow')
        .paintCircle(radius, x - radius, y - radius)
        .paintCircle(radius, x + radius, y - radius)
        .paintCircle(radius, x + radius, y + radius)
        .paintCircle(radius, x - radius, y + radius)
        .setStroke('blue')
        .setFill('white')
        .setStrokeWidth(2)
        .paintCircle(radius, x, y)
        .adddAnimation({
          id: 'test',
          attributeName: GenericShapeAttributeName.r,
          values: `${radius};${radius / 2};${radius}`,
          dur: '5s',
          repeatCount: 'indefinite',
        } as AnimationAttribute)
    }
  }

  new SVGPainter({
    height: '400px',
    width: '80vw',
    parent: node,
  })
    .setBackground('red')
    .setFill('green')
    .paintCircle(50, 20, 20)
    .setFill('blue')
    .paintRectangle(20, 30, 10, 10)
    .paintLine(10, 10, 500, 100)
    .setStroke('lightgreen')
    .paintLine(100, 10, 100, 400)
    .paintSequence(generateFlowerSequence(40, 40))
    .paintSequence(generateFlowerSequence(200, 50))
    .paintLine(100, 10, 400, 100)
    .paintPath(
      `M 10 315
    L 110 215
    A 36 60 0 0 1 150.71 170.29
    L 172.55 152.45
    A 30 50 -45 0 1 215.1 109.9
    L 315 10`
    )
    .paintOver()
}

export default renderPainter

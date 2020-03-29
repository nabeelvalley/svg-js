import SVGPainter from '../svg/api/SVGPainter'

const renderPainter = (node: HTMLElement) => {
  const flowerGenerator = (x, y) => {
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
    }
  }

  new SVGPainter({
    height: '120px',
    width: '80vw',
    parent: node,
  })
    .setBackground('red')
    .setFill('green')
    .paintCircle(50, 20, 20)
    .setFill('blue')
    .paintRectangle(20, 30, 10, 10)
    .paintLine(10, 500, 10, 100)
    .setStroke('lightgreen')
    .paintLine(100, 100, 10, 400)
    .paintSequence(flowerGenerator(40, 40))
    .paintSequence(flowerGenerator(200, 50))
    .paintLine(100, 400, 10, 100)
    .paintOver()
}

export default renderPainter

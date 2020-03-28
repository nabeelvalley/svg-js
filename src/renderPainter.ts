import SVGPainter from '../svg/api/SVGPainter'

const renderPainter = (node: HTMLElement) => {
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
    .paintOver()
}

export default renderPainter

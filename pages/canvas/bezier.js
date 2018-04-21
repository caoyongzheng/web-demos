import React from 'react';
import Head from 'next/head';

class Baezier extends React.PureComponent {
  componentDidMount() {
    const width = 400;
    const height = 300;
    const canvasEl = document.querySelector('#bezier')
    canvasEl.width = width;
    canvasEl.height = height;
    const ctx = canvasEl.getContext('2d')
    const startPoint = { x: 80, y: 200 }
    const endPoint = { x: 300, y: 200 }
    const controlPoint1 = { x: 200, y: 50 }

    const controlPoints = [
      { x: 80, y: 150 },
      { x: 70, y: 50 },
      { x: 200, y: 50 },
      { x: 160, y: 200 },
      { x: 300, y: 150 },
    ]

    let t = 0.4
    let startTime = Date.now()

    draw()

    function calcValue(v1, v2, t) {
      return (1 - t) * v1 + v2 * t;
    }

    function bezier(values = [], t) {
      if (values.length === 1) return values[0];
      const newValues = [];
      for (let i = 1; i < values.length; i++) {
        newValues.push(calcValue(values[i - 1], values[i], t))
      }
      return bezier(newValues, t)
    }

    function draw() {
      t = Math.min((Date.now() - startTime) / 5000, 1)
      const allLevelPoints = [controlPoints]

      for (; allLevelPoints[allLevelPoints.length - 1].length > 1;) {
        const lastLevelPoints = allLevelPoints[allLevelPoints.length - 1]
        const newLastPointsLevel = [];
        for (let i = 1; i < lastLevelPoints.length; i++) {
          newLastPointsLevel.push({
            x: calcValue(lastLevelPoints[i - 1].x, lastLevelPoints[i].x, t),
            y: calcValue(lastLevelPoints[i - 1].y, lastLevelPoints[i].y, t),
          })
        }
        allLevelPoints.push(newLastPointsLevel)
      }

      ctx.clearRect(0, 0, width, height)

      const curvePoints = []
      // points
      for (const points of allLevelPoints) {
        for (const point of points) {
          ctx.beginPath()
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.beginPath()
        for (const point of points) {
          ctx.lineTo(point.x, point.y)
        }
        ctx.stroke()

        curvePoints.push(points[0])
      }

      ctx.beginPath()
      if (curvePoints <= 4) {
        ctx.moveTo(curvePoints[0].x, curvePoints[0].y)
        const args = [];
        for (let i = 1; i < curvePoints.length; i++) {
          args.push(curvePoints[i].x, curvePoints[i].y)
        }
        if (curvePoints === 2) ctx.quadraticCurveTo(...args);
        if (curvePoints === 3) ctx.bezierCurveTo(...args);
      } else {
        for (let tt = 0; tt <= 1; tt += 0.01) {
          ctx.lineTo(
            bezier(curvePoints.map(c => c.x), tt),
            bezier(curvePoints.map(c => c.y), tt),
          )
        }
      }
      ctx.stroke()
      if (t < 1) window.requestAnimationFrame(draw)
    }
    let moveX, moveY, dragNode = -1, nodeX, nodeY
    canvasEl.addEventListener('mousedown', e => {
      moveX = e.clientX
      moveY = e.clientY
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      dragNode = controlPoints.findIndex(p => Math.abs(p.x - x) <= 4 && Math.abs(p.y - y) <= 4)
      if (~~dragNode >= 0) {
        nodeX = controlPoints[dragNode].x
        nodeY = controlPoints[dragNode].y
      }
    });
    canvasEl.addEventListener('mouseup', () => {
      dragNode = -1
    });
    canvasEl.addEventListener('mousemove', e => {
      if (dragNode >= 0) {
        controlPoints[dragNode].x = e.clientX - moveX + nodeX
        controlPoints[dragNode].y = e.clientY - moveY + nodeY
        draw()
      }
    });
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>贝塞尔曲线</title>
        </Head>
        <style jsx>{`
            canvas {
              background: #bbbbbb;
              margin: auto;
              display: block;
            }
          `}
        </style>
        <canvas id="bezier"></canvas>
      </div>
    );
  }
}

Baezier.defaultProps = {};

Baezier.propTypes = {};

export default Baezier;
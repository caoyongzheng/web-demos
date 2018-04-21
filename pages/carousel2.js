import React from 'react';
import Head from 'next/head';

class Carsousel extends React.PureComponent {
  componentDidMount() {
    function intervalNum(begin, end, num) {
      const l = end - begin
      if (l <= 0) {
        throw 'wrong arguments'
      }
      while (num > end) {
        num -= l
      }
      while (num < begin) {
        num += l
      }
      return num
    }
    function Carousel(carouselEl) {
      var offset = 0;
      var width, slides, totalWidth, widths

      var startX, o, active, endX
      carouselEl.addEventListener('touchstart', function (e) {
        e.preventDefault()
        startX = e.touches[0].pageX
        o = offset
      })
      carouselEl.addEventListener('touchmove', function (e) {
        e.preventDefault()
        console.log(1);
        setOffset(o - (e.touches[0].pageX - startX))
        endX = e.touches[0].pageX
      })
      carouselEl.addEventListener('touchend', function (e) {
        let active = getActive()
        const moveX = endX - startX
        if (moveX < 50 && moveX > 0) {
          active++
        }
        if (moveX < -50 && moveX < 0) {
          active++
        }
        animation(offset, active * width, 250, setOffset)
        document.querySelector('#board').innerHTML = active % slides.length
      }, true)

      init()
      window.addEventListener('resize', init)
      function init() {
        width = carouselEl.clientWidth

        //slides
        slides = carouselEl.querySelectorAll('[data-slide]')

        // totalWidth, widths
        totalWidth = 0
        widths = [0]
        for (var i = 0; i < slides.length; i++) {
          totalWidth += slides[i].offsetWidth
          widths.push(slides[i].offsetWidth + widths[i])
        }
        // offset
        setOffset(offset)
      }

      function getActive() {
        return Math.floor(offset / width)
      }

      function setOffset(o) {
        o = intervalNum(0, totalWidth, o)
        let l = slides.length
        let nextWiths = []
        for (var i = 0; i < l; i++) {
          let left = widths[i] - o
          if (totalWidth + left < width) {
            left = totalWidth + left
          }
          nextWiths.push(left)
        }
        for (var j = 0; j < l; j++) {
          slides[j].style.left = `${nextWiths[j]}px`
        }
        offset = o
      }

      function animation(from, to, duration, cb) {
        const start = Date.now()
        function tick() {
          const d = Date.now() - start
          if (d >= duration) {
            cb(to)
            return
          }
          const cursor = ease(d / duration) * (to - from) + from
          cb(cursor)
          window.requestAnimationFrame(tick)
        }
        tick()
      }
      function ease(x) {
        return 1 - Math.pow(1 - x, 2)
      }
      function next() {
        animation(offset, (getActive() + 1) * width, 250, setOffset)
      }
      function pre() {
        animation(offset, (getActive() - 1) * width, 250, setOffset)
      }
      return {
        next,
        pre,
      }
    }
    
    const c = new Carousel(document.getElementById('carousel'))
    document.querySelector('.next').addEventListener('click', function (e) {
      c.next();
    });
    document.querySelector('.pre').addEventListener('click', function (e) {
      c.pre();
    });
  }
  render() {
    return (
      <div>
        <Head>
          <title>轮播2</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        </Head>
        <style jsx>{`
          .h-center {
            margin: auto;
            display: block;
          }
          .carousel {
            position: relative;
            width: 100%;
            height: 300px;
            overflow: hidden;
          }
          .carousel > [data-slide] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
          }
          .active {
            z-index: 1;
          }
          [type=button] {
            display: inline-block;
            padding: 8px 16px;
            margin: 0 5px;
            background-color: #ddd;
            cursor: pointer;
            user-select: none;
          }
          [type=button]:hover {
            opacity: 0.8
          }
          .row {
            width: 100%;
            display: inline-block;
          }
          .h-center {
            text-align: center;
          }
          body {
            margin: 0;
          }
        `}
        </style>
        <div id="carousel" className="carousel h-center">
          <img data-slide src="/static/imgs/demo1.jpg" />
          <img data-slide src="/static/imgs/demo2.jpg" />
          <img data-slide src="/static/imgs/demo3.jpg" />
        </div>
        <div className="row">
          <div className="h-center" style={{ marginTop: 30 }}>
            <div type="button" className="pre">pre</div>
            <div type="button" className="next">next</div>
          </div>
        </div>
        <div className="row">
          <div className="h-center" id="board">
          </div>
        </div>
      </div>
    );
  }
}

Carsousel.defaultProps = {};

Carsousel.propTypes = {};

export default Carsousel;
import React from 'react';
import Head from 'next/head';

class Carsousel extends React.PureComponent {
  componentDidMount() {
    function Carousel(carouselEl) {
      const slides = carouselEl.querySelectorAll('[data-slide]');
      let active = 0;
      let moving = false;
      console.log(slides);
      slides[0].classList.add('active');

      for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute('slide', i);
        slides[i].classList.add('transition');
      }
      slides[active].classList.add('active');

      function getActiveSlide() {
        return slides[active];
      }

      function toggle(nextActive) {
        if (moving) {
          return
        }
        moving = true

        const nActive = (nextActive + slides.length) % slides.length

        slides[nActive].classList.remove('transition')
        if (nextActive > active) {
          slides[nActive].style.left = '100%'
        } else {
          slides[nActive].style.left = '-100%'
        }

        setTimeout(function () {
          slides[nActive].classList.add('transition');
          slides[nActive].style.left = 0;
          slides[active].style.left = nextActive > active ? '-100%' : '100%';
          slides[nActive].classList.add('active');
          setTimeout(function () {
            getActiveSlide().classList.remove('active');
            active = nActive;
            moving = false;
          }, 300);
        }, 0);
      }

      function next() {
        toggle(active + 1)
      }
      function pre() {
        toggle(active - 1)
      }
      return {
        toggle,
        next,
        pre,
      }
    }
    console.log(document.querySelector('#carousel'));
    const c = new Carousel(document.querySelector('#carousel'));
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
          <title>轮播</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        </Head>
        <style jsx>{`
          .h-center {
            margin: auto;
            display: block;
          }
          .carousel {
            position: relative;
            width: 400px;
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
          [data-slide].transition {
            -webkit-transition: left 300ms ease-in-out, top 300ms ease-in-out;
            transition: left 300ms ease-in-out, top 300ms ease-in-out;
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
        `}
        </style>
        <div id="carousel" className="carousel h-center">
          <img data-slide src="//placehold.it/400x300" />
          <img data-slide src="//placehold.it/400x300" />
          <img data-slide src="//placehold.it/400x300" />
        </div>
        <div className="row">
          <div className="h-center" style={{marginTop: 30}}>
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
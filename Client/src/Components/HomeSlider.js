import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo from '../assets/ANI-20240121194141.jpg';
import ExploreMusic from '../assets/exploreMusic.png';
import './HomeSlider.css';
const HomeSlider = () => {
    return (
        <div className="carContainer">
            <Carousel data-bs-theme="light">
          <Carousel.Item>
            <a href="/events">
            <img
              className="d-block w-100"
              src={photo}
              alt="First slide"
            />
            </a>
            {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <a href="/music">
            <img
              className="d-block w-100"
              src={ExploreMusic}
              alt="Second slide"
            />
            </a>
            {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <a href="/plays">
            <img
              className="d-block w-100"
              src={photo}
              alt="Third slide"
            />
            </a>
            {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <a href="/sports">
            <img
              className="d-block w-100"
              src={photo}
              alt="Fourth slide"
            />
            </a>
            {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        </div>
      );
}

export default HomeSlider;
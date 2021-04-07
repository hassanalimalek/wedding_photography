import React from 'react';
import styles from '../../css/landingCarousel.module.scss';
import cx from 'classnames';
// Carousel
import {Carousel} from 'react-bootstrap';
// Text Animation
import styled, {keyframes} from 'styled-components';
import {fadeInUp} from 'react-animations';

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import {Carousel} from 'react-responsive-carousel';

function Index() {
  const fadeInUpAnimation = keyframes`${fadeInUp}`;

  const FadeInUpDiv = styled.div`
    animation: 4s ${fadeInUpAnimation};
  `;

  return (
    <div className={styles.landingCarouselContainer}>
      <Carousel className={styles.carousel}>
        <Carousel.Item
          className={cx(styles.carouselItem, styles.carouselItem1)}
        >
          <Carousel.Caption>
            <div className={styles.caption}>
              <div>
                <FadeInUpDiv>
                  <h1>Made with love</h1>
                  <p>Lorem Ipsum Lorem Ipsum</p>
                  <span className={styles.carouselBtn}>Read More </span>
                </FadeInUpDiv>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className={cx(styles.carouselItem, styles.carouselItem2)}
        >
          <Carousel.Caption>
            <div className={styles.caption}>
              <div>
                <FadeInUpDiv>
                  <h1>Made with love</h1>
                  <p>Lorem Ipsum Lorem Ipsum</p>
                  <span className={styles.carouselBtn}>Read More </span>
                </FadeInUpDiv>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className={cx(styles.carouselItem, styles.carouselItem3)}
        >
          <Carousel.Caption>
            <div className={styles.caption}>
              <div>
                <FadeInUpDiv>
                  <h1>Made with love</h1>
                  <p>Lorem Ipsum Lorem Ipsum</p>
                  <span className={styles.carouselBtn}>Read More </span>
                </FadeInUpDiv>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Index;

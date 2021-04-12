import React, { useState, useEffect } from "react";
import styles from "../../css/landingCarousel.module.scss";
import cx from "classnames";
// Carousel
import { Carousel } from "react-bootstrap";
// Text Animation
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

function Index() {
  // Fade Up Animation
  const fadeInUpAnimation = keyframes`${fadeInUp}`;
  const FadeInUpDiv = styled.div`
    animation: 2s ${fadeInUpAnimation};
  `;
  const [controlsAreVisible, setControlsAreVisible] = useState(true);

  useEffect(() => {
    // iPhone X width, for example
    if (window.innerWidth <= 520) {
      setControlsAreVisible(false);
    }

    // you can also set up event listeners here for "resize" for full responsiveness
  }, []);

  return (
    <div className={styles.landingCarouselContainer}>
      <Carousel className={styles.carousel} controls={controlsAreVisible}>
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

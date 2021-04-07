import React from 'react';
import cx from 'classnames';
import styles from '../../css/generalPhotos.module.scss';
import img1 from '../../assets/generalImages/img1.jpg';
import img2 from '../../assets/generalImages/img2.jpg';
import img3 from '../../assets/generalImages/img3.jpg';
import img4 from '../../assets/generalImages/img4.jpg';
// Image Effect
import Fade from 'react-reveal/Fade';
import {Container, Row, Col} from 'react-bootstrap';

function Index() {
  // Getting Image with the fade and hover scale animation
  let getImage = (imgName, fadeEffect) => {
    return fadeEffect === 'left' ? (
      <Fade left>
        <img alt="Wedding 1" src={imgName} />
      </Fade>
    ) : (
      <Fade right>
        <img alt="Wedding  2" src={imgName} />
      </Fade>
    );
  };

  return (
    <div className={styles.generalPhotos}>
      <div className={styles.topSection}>
        <Container fluid className={cx(styles.topSectionWrapper)}>
          <Row>
            <Col sm={12} md={6} className={cx(styles.topDivOne)}>
              <h2 className={styles.titleHeading}>Authentic Photos</h2>
              <p className={styles.titleParagraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium veritatis
              </p>
              <div className={cx(styles.imgDiv)}>
                {getImage(img1, 'left')}
                <p className={styles.imgDivTitle}>Interior</p>
                <h3 className={styles.imgDivSubTitle}>Bridal Bonquet</h3>
              </div>
            </Col>
            <Col sm={12} md={6} className={styles.topDivTwo}>
              {getImage(img2, 'right')}
              <p className={styles.imgDivTitle}>Interior</p>
              <h3 className={styles.imgDivSubTitle}>Bridal Bonquet</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.bottomSection}>
        <Container fluid className={cx(styles.bottomSectionWrapper)}>
          <Row>
            <Col sm={12} md={6} className={cx(styles.bottomDivOne)}>
              <div className={cx(styles.imgDiv)}>
                {getImage(img3, 'left')}
                <p className={styles.imgDivTitle}>Interior</p>
                <h3 className={styles.imgDivSubTitle}>Capture Emotions</h3>
              </div>
            </Col>
            <Col sm={12} md={6} className={styles.bottomDivTwo}>
              <div className={cx(styles.imgDiv)}>
                {getImage(img4, 'right')}
                <p className={styles.imgDivTitle}>Interior</p>
                <h3 className={styles.imgDivSubTitle}>Capture Memories</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Index;

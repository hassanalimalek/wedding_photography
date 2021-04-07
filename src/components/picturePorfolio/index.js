import React from 'react';
import styles from '../../css/picturePortfolio.module.scss';
import img1 from '../../assets/generalImages/img3.jpg';
import portFolioImages from './imagesImport';

import {Container, Row, Col} from 'react-bootstrap';

function Index() {
  let getImages = () => {
    let x = [];
    for (let i = 0; i < 8; i++) {
      x.push(
        <Col xs={6} sm={4} md={3} className={styles.picture}>
          <img src={portFolioImages[i]}></img>
        </Col>
      );
    }
    return x;
  };
  console.log(portFolioImages);
  return (
    <div className={styles.picturePortfolio}>
      <h1 className={styles.title}>Memories Created</h1>
      <Container fluid className={styles.picturesSection}>
        <Row>{getImages()}</Row>
      </Container>
    </div>
  );
}

export default Index;

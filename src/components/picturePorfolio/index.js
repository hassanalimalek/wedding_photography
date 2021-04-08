import React from 'react';
import styles from '../../css/picturePortfolio.module.scss';
import portFolioImages from './imagesImport';

import {Container, Row, Col} from 'react-bootstrap';

function Index() {
  let getImages = () => {
    let imgJsx = [];
    for (let i = 0; i < 8; i++) {
      imgJsx.push(
        <Col xs={6} sm={4} md={3} className={styles.picture}>
          <img alt="Wedding " src={portFolioImages[i]}></img>
        </Col>
      );
    }
    return imgJsx;
  };
  console.log(portFolioImages);
  return (
    <div className={styles.picturePortfolio} id="gallery">
      <h1 className={styles.title}>Memories Created</h1>
      <Container fluid className={styles.picturesSection}>
        <Row>{getImages()}</Row>
      </Container>
    </div>
  );
}

export default Index;

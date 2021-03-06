import React from 'react';
import styles from '../../css/footer.module.scss';
import cx from 'classnames';
import {Container, Row, Col} from 'react-bootstrap';
import {FaFacebookF, FaYoutube} from 'react-icons/fa';
import {FiSmartphone} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {AiOutlineMail, AiFillInstagram} from 'react-icons/ai';

function Index() {
  return (
    <div className={styles.footer} id="aboutUs">
      <div className={styles.footerWrapper}>
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} sm={6}>
              <div className={styles.footerDivOne}>
                <div className={styles.iconDiv}>
                  <span className={styles.icon}>
                    <GoLocation />
                  </span>
                  <p className={styles.iconTxt}>
                    Office #6, 2nd Floor, Shaheen Plaza, Chandni Chowk Rwp
                  </p>
                </div>
                <div className={styles.iconDiv}>
                  <span className={styles.icon}>
                    <FiSmartphone />
                  </span>
                  <div>
                    <h5 className={styles.iconTxt}>0333-5270101</h5>
                    <h5 className={styles.iconTxt}>0345-5270101</h5>
                  </div>
                </div>
                <div className={styles.iconDiv}>
                  <span className={styles.icon}>
                    <AiOutlineMail />
                  </span>
                  <p className={cx(styles.iconTxt, styles.iconTxtMail)}>
                    Shahidbalte@gmail.com
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className={styles.footerDivTwo}>
                <h2 className={styles.aboutTitle}>About The Company</h2>
                <p className={styles.aboutParagraph}>
                  Balti Studio is a team of Professional Photographers,
                  Videographers bringing with them varied interests and skill
                  sets that collaborate to document weddings in a unique and
                  cohesive way.
                </p>
                <div className={styles.socialIcons}>
                  <h4 className={styles.fbIcon}>
                    <FaFacebookF />
                  </h4>
                  <h4 className={styles.igIcon}>
                    <AiFillInstagram />
                  </h4>
                  <h4 className={styles.ytIcon}>
                    <FaYoutube />
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Index;

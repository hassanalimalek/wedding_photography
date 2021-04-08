import React from 'react';
import styles from '../../css/getInTouch.module.scss';
import {Container, Row, Col} from 'react-bootstrap';

function Index() {
  let formSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit');
  };
  return (
    <div className={styles.getInTouch} id="contact">
      <div className={styles.getInTouchWrapper}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>Follow our latest Stories</p>
        <Container fluid className={styles.form}>
          <form onSubmit={formSubmit}>
            <Row>
              <Col xs={12} sm={6}>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Name"
                ></input>
              </Col>
              <Col xs={12} sm={6}>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="Email"
                ></input>
              </Col>
              <Col xs={12} sm={6}>
                <input
                  className={styles.formInput}
                  type="date"
                  placeholder="Wedding Date"
                ></input>
              </Col>
              <Col xs={12} sm={6}>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="Weddding Address"
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={8} className="mx-auto">
                <textarea
                  className={styles.formTextArea}
                  placeholder="Tell us more"
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col>
                <button type="submit" className={styles.formSubmitBtn}>
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Index;

import React from 'react';
import styles from '../../css/pricing.module.scss';
import cx from 'classnames';
import {Container, Row, Col} from 'react-bootstrap';
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
import pkrLogo from '../../assets/logos/pkr.png';

function Index() {
  return (
    <div className={styles.pricing}>
      <div className={styles.pricingWrapper}>
        <h1 className={styles.title}>PRICING PLANS</h1>
        <p className={styles.subtitle}>Best Prices in town</p>
        <Container fluid className={styles.pricingPlans}>
          <Row>
            <Col md={4}>
              <div className={cx(styles.pricingPlan, styles.pricingPlanBasic)}>
                <div className={styles.pricingPlanTitle}>
                  <h2>Basic</h2>
                </div>
                <Container className={styles.pricingDetails}>
                  <Row>
                    <Col>
                      <div className={styles.pricingContainer}>
                        <span>
                          <img
                            alt="Pkr Logo"
                            className={styles.pkrLogo}
                            src={pkrLogo}
                          ></img>
                        </span>
                        <span className={styles.pricingTxt}>5000 </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Photographer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Videographer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaTimesCircle className={styles.crossIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Drone</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaTimesCircle className={styles.crossIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Cinematic Footage</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col md={4}>
              <div
                className={cx(styles.pricingPlan, styles.pricingPlanPremium)}
              >
                <div className={styles.pricingPlanTitle}>
                  <h2>Premium</h2>
                </div>
                <Container className={styles.pricingDetails}>
                  <Row>
                    <Col>
                      <div className={styles.pricingContainer}>
                        <span>
                          <img
                            alt="Pkr Logo"
                            className={styles.pkrLogo}
                            src={pkrLogo}
                          ></img>
                        </span>
                        <span className={styles.pricingTxt}>15,000 </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Photographer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Videographer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Drone</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Cinematic Footage</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col md={4}>
              <div
                className={cx(styles.pricingPlan, styles.pricingPlanStandard)}
              >
                <div className={styles.pricingPlanTitle}>
                  <h2>Standard</h2>
                </div>
                <Container className={styles.pricingDetails}>
                  <Row>
                    <Col>
                      <div className={styles.pricingContainer}>
                        <span>
                          <img
                            alt="Pkr Logo"
                            className={styles.pkrLogo}
                            src={pkrLogo}
                          ></img>
                        </span>
                        <span className={styles.pricingTxt}>10,000 </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Photographer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Videographer</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaCheckCircle className={styles.checkIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Drone</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <FaTimesCircle className={styles.crossIcon} />
                    </Col>
                    <Col xs={8}>
                      <p>Cinematic Footage</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Index;

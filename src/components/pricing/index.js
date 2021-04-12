import React from "react";
import styles from "../../css/pricing.module.scss";
import cx from "classnames";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import pkrLogo from "../../assets/logos/pkr.png";

function Index() {
  let getPricingCart = (
    pricingCategory,
    price,
    photographer,
    videographer,
    drone,
    cinematicFootage
  ) => {
    console.log(pricingCategory);
    return (
      <div className={cx(styles.pricingPlan, pricingCategory)}>
        <div className="pricingPlanTitle">
          <h2>{pricingCategory}</h2>
        </div>
        <Container fluid className={styles.pricingDetails}>
          <div className={styles.pricingContainer}>
            <span className={styles.pricingTxt}>
              <span>
                <img
                  alt="Pkr Logo"
                  className={styles.pkrLogo}
                  src={pkrLogo}
                ></img>
              </span>
              {price}
            </span>
          </div>
          <div className={styles.feautures}>
            <div className={styles.feautureRow}>
              <span className={styles.iconDiv}>
                {photographer === true ? (
                  <FaCheckCircle className={styles.checkIcon} />
                ) : (
                  <FaTimesCircle className={styles.crossIcon} />
                )}
              </span>
              <span className={styles.iconTxt}>Photographer</span>
            </div>
            <div className={styles.feautureRow}>
              <span className={styles.iconDiv}>
                {videographer === true ? (
                  <FaCheckCircle className={styles.checkIcon} />
                ) : (
                  <FaTimesCircle className={styles.crossIcon} />
                )}
              </span>
              <span className={styles.iconTxt}>Videographer</span>
            </div>
            <div className={styles.feautureRow}>
              <span className={styles.iconDiv}>
                {drone === true ? (
                  <FaCheckCircle className={styles.checkIcon} />
                ) : (
                  <FaTimesCircle className={styles.crossIcon} />
                )}
              </span>
              <span className={styles.iconTxt}>Drone</span>
            </div>
            <div className={styles.feautureRow}>
              <span className={styles.iconDiv}>
                {cinematicFootage === true ? (
                  <FaCheckCircle className={styles.checkIcon} />
                ) : (
                  <FaTimesCircle className={styles.crossIcon} />
                )}
              </span>
              <span className={styles.iconTxt}>Cinematic Footage</span>
            </div>
          </div>
        </Container>
      </div>
    );
  };
  return (
    <div className={styles.pricing} id="packages">
      <div className={styles.pricingWrapper}>
        <h1 className={styles.title}>Pricing Plans</h1>
        <p className={styles.subtitle}>Best Prices in town</p>
        <Container fluid className={styles.pricingPlans}>
          <Row>
            <Col md={4}>
              {getPricingCart("Basic", "10,000", true, true, false, false)}
            </Col>
            <Col md={4}>
              {getPricingCart("Premium", "35,000", true, true, true, true)}
            </Col>
            <Col md={4}>
              {getPricingCart("Standard", "20,000", true, true, true, false)}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Index;

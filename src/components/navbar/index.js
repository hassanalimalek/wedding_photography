import React from 'react';
import styles from '../../css/navbar.module.scss';
import cx from 'classnames';
import logo from '../../assets/logos/navLogo.png';
import {Navbar, Nav} from 'react-bootstrap';

function Index() {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar} id="home">
      <Navbar.Brand href="#home">
        <img alt="Camera Logo" className={styles.brandLogo} src={logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={styles.toggleBtn}
      >
        <p className={styles.togglerLineOne}></p>
        <p className={styles.togglerLineTwo}></p>
        <p className={styles.togglerLineThree}></p>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={cx(styles.mainNavOptions, 'm-auto md-m')}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#packages">Packages</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#aboutUs">About Us</a>
            </li>
          </ul>
        </Nav>
        {/* <ul className={styles.infoBtn}>
          <li>
            <a>Info</a>
          </li>
        </ul> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Index;

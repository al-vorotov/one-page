import React, { Fragment } from "react";

import logoFacebook from "../../../../Static/icon/facebook.png";
import logoGithub from "../../../../Static/icon/github.png";
import logoGoogle from "../../../../Static/icon/Google_Logo.png";

import styles from "./styles.module.scss";

const Register = () => {
  return (
      <Fragment>
        <div className={styles.register}>
          <h3 className={styles.registerLogo}>Register with</h3>
          <div className={styles.mainDivForIcons}>
            <div className={styles.iconBlock}>
              <img src={logoGoogle} alt="logo"/>
              <p>Google</p>
            </div>
            <div className={styles.iconBlock}>
              <img src={logoFacebook} alt="logo"/>
              <p>Facebook</p>
            </div>
            <div className={styles.iconBlock}>
              <img src={logoGithub} alt="logo"/>
              <p>Facebook</p>
            </div>
          </div>
          <div className={styles.logInPlease}>
            Allready have an account? <a href="/">Log in</a>
          </div>
        </div>
      </Fragment>
  );
};

export default Register;

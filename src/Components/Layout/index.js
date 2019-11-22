import React, { Fragment } from "react";
import { Container } from "@material-ui/core";

import Form from "./Components/Form";
import Register from "./Components/Register";

import styles from "./styles.module.scss";

const Layout = () => {
  return (
      <Fragment>
        <Container>
          <div className={styles.contentPage}>
            <Form/>
            <Register/>
          </div>
        </Container>
      </Fragment>
  );
};

export default Layout;

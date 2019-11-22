import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles.module.scss";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 450
  }
}));

const Form = () => {
  const classes = useStyles();

  return (
      <Fragment>
        <div className={styles.form}>
          <h3 className={styles.formLogo}>Create An Account</h3>
          <TextField
              id="outlined-password-input"
              label="Email Address"
              className={classes.textField}
              type="email"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
          />
          <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
          />
          <label className={styles.boxLabel}>
            <input type="checkbox" id="checkbox" checked=""/>
            <span>
            Opt in to receive our communications about news, offers, resources,
            blog posts, and product updates.
          </span>
          </label>
          <div className={styles.accountButton}>Create an Account</div>
          <div className={styles.circleButton}>or</div>
          <div className={styles.privacy}>
            By clicking "Create An Account". you agree to the beluga's <a href="/">Privacy Statement</a>, <a href="/">Master
            Service Agreement</a> and <a href="/">Acceptable Use Policy</a>.
          </div>
        </div>
      </Fragment>
  );
};

export default Form;

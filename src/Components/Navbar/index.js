import React, { Fragment } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Static/icon/beluga-cdn-logo.png";

import styles from "./styles.module.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
      <Fragment>
        <div>
          <AppBar position="static" className={styles.header}>
            <Toolbar>
              <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
              />
              <Typography variant="h6" className={classes.title}>
                <img src={logo} className={styles.headerLogo} alt="logo"/>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </Fragment>

  );
};

export default Navbar;

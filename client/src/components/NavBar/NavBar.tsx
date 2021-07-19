import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

import memories from "../../images/memories.png";

export const NavBar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Rememory
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="60"
          />
        </div>
      </AppBar>
    </div>
  );
};

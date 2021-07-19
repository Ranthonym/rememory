import React from "react";
import { AppBar, Typography } from "@material-ui/core";

import useStyles from "./styles";

import memories from "../../images/memories.png";

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Rememory
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
    </div>
  );
};

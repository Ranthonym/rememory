import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

import memories from "../../images/memories.png";

export const NavBar = () => {
  const classes = useStyles();

  const user = null as any;

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
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              {/* <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageURL}
              >
                {user.result.name.charAt(0)}
              </Avatar> */}
              <Typography
                className={classes.userName}
                variant="h6"
                align="center"
              >
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                // className={classes.logout}
                color="secondary"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

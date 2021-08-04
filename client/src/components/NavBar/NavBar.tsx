import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import useStyles from "./styles";

import rewind from "../../images/rewind.png";

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") as any)
  );

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token) as any;

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile") as any));
  }, [location]);

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
          <img className={classes.image} src={rewind} alt="icon" height="60" />
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
                onClick={logout}
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

import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { NavBar } from "./components/NavBar/NavBar";
import { getPosts } from "../src/actions/posts";

import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState<any>(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 100);
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

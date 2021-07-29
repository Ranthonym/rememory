import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";

// import useStyles from "../../styles";

export const Home = () => {
  const [currentId, setCurrentId] = useState<any>(null);
  const dispatch = useDispatch();
  //   const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 100);
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          //   className={classes.mainContainer}
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
  );
};

import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

// interface Props {
//   post: {
//     title: string;
//     message: string;
//     creator: string;
//     tags: string[];
//     selectedfile: string;
//   };
// }

const Posts = ({ setCurrentId }: any) => {
  const posts = useSelector((state: any) => state.posts);

  // useEffect(() => {

  // }, [])

  // console.log(posts);

  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post: any) => (
        <Grid key={posts._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
      {/* {posts.map((post: any) => {
        console.log(post);
      })} */}
    </Grid>
  );
};

export default Posts;

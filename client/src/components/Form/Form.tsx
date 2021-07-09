import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

// type Props = {
//   savePost: (post: Post | any) => void;
// };

const Form = () => {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  // const handlePostData = (e: any) => {
  //   setPostData({
  //     ...postData,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   });
  // };

  // const createNewPost = (e: any) => {
  //   e.preventDefault();
  //   savePost(postData);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="author"
          variant="outlined"
          label="Author"
          fullWidth
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            muiltiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

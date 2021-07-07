interface Post {
  id: number;
  title: string;
  body: string;
}

type PostState = {
  posts: Post[];
};

type PostAction = {
  type: string;
  payload: Post;
};

type DispatchType = (args: PostAction) => PostAction;

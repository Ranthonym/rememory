interface Post {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedfile: string;
  likeCount: {
    type: Number;
    default: 0;
  };
  createdAt: {
    type: Date;
    default: Date;
  };
}

// type PostState = {
//   posts: Post[];
// };

// type PostAction = {
//   type: string;
//   payload: Post;
// };

// type DispatchType = (args: PostAction) => PostAction;

// to fix react-file-base64 declare module error
declare module "react-file-base64";

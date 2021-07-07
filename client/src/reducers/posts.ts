// eslint-disable-next-line import/no-anonymous-default-export

export default (posts = [], action: PostAction) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    case "EDIT":
      return posts;
    default:
      return posts;
  }
};

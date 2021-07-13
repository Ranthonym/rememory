// eslint-disable-next-line import/no-anonymous-default-export

export default (posts = [] as any[], action: any) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE_POST":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "Delete_POST":
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

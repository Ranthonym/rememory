import jwt from "jsonwebtoken";

const auth = async (req: any, _res: any, next: any) => {
  try {
    // get user token from frontend
    const token = req.headers.Authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // check if token is own auth or google auth
    let decodedData: any;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "testSecretKey");

      req.userId = decodedData?.id;
    } else {
      // google auth
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

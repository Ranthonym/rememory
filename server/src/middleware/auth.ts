import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req: any, _res: any, next: any) => {
  try {
    // get user token from frontend
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // check if token is own auth or google auth
    let decodedData: any;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

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

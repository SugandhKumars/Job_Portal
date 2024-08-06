import jwt from "jsonwebtoken";

const isAutheticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not Autheticated",
        success: true,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRECT_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAutheticated;

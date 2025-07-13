import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode) {
      if (!req.body) req.body = {};
      req.body.userId = tokenDecode.id;
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not authorised, login again" });
    }
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export default userAuth;

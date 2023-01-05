const allowedOrigins = [
  process.env.BASE_URL,
  "http://127.0.0.1:5173/",
  "http://localhost:5173/",
];

export const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

import ApiError from "../utils/apiError.js";

export default function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.code).json({
      error: {
        message: err.message,
        status: err.code,
      },
    });
  }
  return res.status(500).json({
    error: {
      message: "Internal Server Error",
      status: 500,
    },
  });
}

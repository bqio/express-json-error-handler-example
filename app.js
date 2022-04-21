import express from "express";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import ApiError from "./utils/apiError.js";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  if (req.query.q) {
    res.send(req.query.q);
  } else {
    next(ApiError.BadRequest());
  }
});

app.use(errorMiddleware);

app.listen(3000);

import httpCodes from "./httpCodes.js";

export default class ApiError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }

  static NotFound(message = "Not found") {
    return new ApiError(message, httpCodes.NotFound);
  }

  static BadRequest(message = "Bad Request") {
    return new ApiError(message, httpCodes.BadRequest);
  }
}

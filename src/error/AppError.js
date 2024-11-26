class AppError extends Error {
    constructor(status, message) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = message || "Something went wrong. Please try again.";
      this.status = status || 500;
    }
  }
  
  export default AppError;
  
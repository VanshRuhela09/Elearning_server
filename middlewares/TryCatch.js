//this is a common middleware for error handling in async functions
const TryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);  //jo handler function hai argument me usme async use hora hai so we apply await here bse handler function is a asynchrounous function
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
};

export default TryCatch;
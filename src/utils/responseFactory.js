

function responseFactory(res) {
    return {
      // Respond with a success message and optional data
      success: function(data) {
        res.status(200).json({
          status: 'success',
          data: data
        });
      },
  
      
      error: function(message, statusCode = 500) {
        res.status(statusCode).json({
          status: 'error',
          message: message
        });
      },
  
      // Respond with a not found message and optional status code
      notFound: function(message = 'Resource not found', statusCode = 404) {
        res.status(statusCode).json({
          status: 'error',
          message: message
        });
      },
  
      notAcceptable: function(message, statusCode = 406) {
        res.status(statusCode).json({
          status: 'error',
          message: message
        });
      }
    };
  }
  
  // Export the function to be used in other files
  module.exports = responseFactory;
  
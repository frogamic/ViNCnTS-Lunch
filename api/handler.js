'use strict';

module.exports.get = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
module.exports.list = module.exports.get;
module.exports.create = module.exports.get;
module.exports.update = module.exports.get;
module.exports.delete = module.exports.get;


const awsServerlessExpress = require('aws-serverless-express');
const app = require('./index');

const server = awsServerlessExpress.createServer(app);

//event que gatilla lambda, provistos por AWS
exports.serverHandler = (event, context) => { 
  return awsServerlessExpress.proxy(server, event, context);
}
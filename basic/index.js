'use-strict';

/** Dependencies */
var querystring = require('querystring'),
    request = require('request');

/**
 * Client
 * @param  {Object} options  Options object
 * @return {Client}          Returns itself
 */
var Client = function(options) {
  var defaults = {
    env: 'production'
  };

  this.options = _.merge({}, defaults, options);

  if(this.options.env === 'test') {
    this.url = 'https://test.example.com';
  } else {
    this.url = 'https://example.com';
  }

  return this;
};

/**
 * Client constuctor
 * @param  {Object} options  Options object
 * @return {Client}          Returns a new instance of the Client object
 */
module.exports.createClient = function(options) {
  return new Client(options);
};

/**
 * Wrapper function for API requests
 * @param  {String}   resource     Path to the resource
 * @param {String} method Request method
 * @param {Object} params URL query params
 * @param {Object} body POST body
 * @param  {Function} callback Gets called after request is complete
 */
Client.prototype.doRequest = function(resource, method, params, body, callback) {

};

/**
 * Example method
 * @param {Function} callback Gets called after request is complete
 */
Client.prototype.exampleMethod = function(callback) {
 
  this.doRequest('/example/method', 'GET', {}, {}, callback);
};
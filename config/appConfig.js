let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsorOrigin = "*";
appConfig.env = "deepak";
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/blogAppDB',
  }
appConfig.apiversion = '/api/v1';  

module.exports = {
    
    port: appConfig.port,
    allowedCorsorOrigin: appConfig.allowedCorsorOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiversion : appConfig.apiversion

}//end module exports
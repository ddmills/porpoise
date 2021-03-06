const config = require('config');

const options = {
  proxy: `${config.server.protocol}://${config.server.host}:${config.server.port}`,
  open: false,
  server: false,
  injectNotification: false,
  host: config.browserSync.externalHost,
  port: config.browserSync.externalPort,
};

if (config.server.protocol === 'https') {
  options.httpModule = 'spdy';
  options.https = {
    key: config.ssl.privateKeyPath,
    cert: config.ssl.certificatePath,
  };
}

module.exports = options;

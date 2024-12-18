const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'firebasedatabase_CRUD',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;


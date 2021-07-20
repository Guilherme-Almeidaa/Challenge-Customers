require('dotenv').config();

module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "./data_sqlite.db",
    "logging": false,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  }
}

const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');
const sql_connection = require('./helpers/mysql-connection');
const launchServer = async () => {
  try {
    const pool = await sql_connection.init();
    if (pool) {
      this.expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
      this.expressServer.launch();
      logger.info('Express server running');
    }    
  } catch (error) {
    logger.error('Express Server failure', error.message);
    await sql_connection.tearDown();
    await this.close();
  }
};

launchServer().catch(e => logger.error(e));

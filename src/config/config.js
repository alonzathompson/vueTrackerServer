module.exports = {
  port: process.env.PORT || 4000,
  db: {
    database: process.env.DB_NAME || 'tabTracker',
    user: process.env.DB_USER || 'tabTracker',
    password: process.env.DB_PASS || 'tabTracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabTracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

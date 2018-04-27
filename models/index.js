const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack')

async function dbAuthenticator() {
  await db.authenticate().then(() => { console.log('connected to database') })
}
dbAuthenticator()

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.ENUM('open', 'closed')
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = { Page, User }
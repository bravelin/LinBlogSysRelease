const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Visit = db.defineModel(app, 'visit', {
        articleId: {
            type: INTEGER,
            allowNull: true
        },
        pagePath: {
            type: STRING,
            allowNull: false
        }
    })
    return Visit
}

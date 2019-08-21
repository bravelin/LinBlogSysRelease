const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize
    const Visit = db.defineModel(app, 'visit', {
        articleId: {
            type: STRING,
            allowNull: false
        },
        pagePath: {
            type: STRING,
            allowNull: false
        }
    })
    return Visit
}

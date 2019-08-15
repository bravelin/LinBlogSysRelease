const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Article = db.defineModel(app, 'article', {
        title: {
            type: STRING,
            allowNull: false
        },
        type: {
            type: STRING,
            allowNull: false
        },
        description: {
            type: STRING,
            allowNull: true
        },
        content: {
            type: STRING,
            allowNull: true
        },
        status: {
            type: STRING,
            allowNull: false
        },
        author: {
            type: STRING,
            allowNull: false
        },
        visitCount: {
            type: INTEGER,
            allowNull: true
        },
        routerName: {
            type: STRING,
            allowNull: true
        }
    })
    return Article
}

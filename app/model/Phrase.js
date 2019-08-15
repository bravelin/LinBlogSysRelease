const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Phrase = db.defineModel(app, 'phrase', {
        content: {
            type: STRING,
            allowNull: false
        },
        origin: {
            type: STRING,
            allowNull: true
        },
        imgs: {
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
        }
    })
    return Phrase
}

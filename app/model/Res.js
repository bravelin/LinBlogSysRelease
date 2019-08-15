const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Res = db.defineModel(app, 'res', {
        remark: {
            type: STRING,
            allowNull: true
        },
        path: {
            type: STRING,
            allowNull: false
        },
        type: {
            type: STRING,
            allowNull: false
        },
        size: {
            type: INTEGER,
            allowNull: false
        },
        author: {
            type: STRING,
            allowNull: false
        }
    })
    return Res
}

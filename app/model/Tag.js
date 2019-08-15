const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize
    const Tag = db.defineModel(app, 'tag', {
        tagName: {
            type: STRING,
            allowNull: false
        }
    })
    return Tag
}

const db = require('../db')
module.exports = app => {
    const { STRING } = app.Sequelize
    const Linktag = db.defineModel(app, 'linktag', {
        articleId: {
            type: STRING,
            allowNull: false
        },
        tagId: {
            type: STRING,
            allowNull: false
        }
    })
    return Linktag
}

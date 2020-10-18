const orphanages = require('./database/fakedata.js')

module.exports = {

    index(req, res) {
        return res.render('index')
    },
    orphanage(req, res) {
        return res.render('page-orphanage')
    },
    orphanages(req, res) {
        return res.render('page-orphanages', { orphanages })
    },
    createOrphanage(req, res) {
        return res.render('create-orphanages')
    }
}
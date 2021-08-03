class ProbesController {

    async handleLiveness(req, res) {
        res.status(200)
        res.send({"ok": true})
    }

    async handleReadiness(req, res) {
        res.status(200)
        res.send({"ok": true})
    }
}

module.exports = (repositories) => {

    var controller = new ProbesController()
    var express = require('express')
    var router = express.Router()

    router.get('/liveness', function (req, res) {
        controller.handleLiveness(req, res)
    })

    router.get('/readiness', function (req, res) {
        controller.handleReadiness(req, res)
    })

    return router
}
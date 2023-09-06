const router = require('express').Router()
const User =  require('../db/models/user.model')

router.route('/').get(async (req, res) => {
    const users = await User.findAll()

    console.log(users)
    res.json(users)
})

router.route('/body').get((req, res) => {
    const b = req.body

    res.json(b)
})

module.exports = router

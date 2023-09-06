const router = require('express').Router()
const User =  require('../db/models/user.model')

router.route('/').get(async (req, res) => {
    const users = await User.findAll()

    console.log(users)
    res.json(users)
})

router.route('/add').post(async (req, res) => {
    const b = req.body

    const add = await User.create(b)

    res.json(add)
})

module.exports = router

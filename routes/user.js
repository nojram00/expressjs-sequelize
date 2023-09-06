const router = require('express').Router()
const { where } = require('sequelize')
const User =  require('../db/models/user.model')

//READ:
router.route('/').get(async (req, res) => {
    await User.findAll().then((user) => {
        console.log(user)
        res.json(user)
    });
});

//CREATE
router.route('/add').post(async (req, res) => {
    const b = req.body
    await User.create(b).then((add) => {
        if(add)
        {
            res.json({status : true})
        }
        else
        {
            res.status(400).json({status: false})
        }
    }).catch((err) => {
        console.error(err)
        res.status(400)
    });
});

//UPDATE
router.route('/update').put(async (req, res) => {
    await User.update(req.body,{
        where: {
            id : req.query.id
        }
    }).then((update) => {
        if(update) {
            res.json({success:true})
        }
        else{
            res.status(400).json({success:false})
        }
    }).catch((err) => {
        console.error(err)
        res.status(409).json({errorMessage:err})
    });
});


//DELETE:
router.route('/delete').delete(async (req, res) => {
    const b = req.query.id
    await User.destroy({
        where : {
            id: b
        }
    }).then(
        (del) => {
            if(del){
                res.json({success : true})
            }
            else{
                res.status(400).json({success : false})
            }
        }
    ).catch(
        (err) => {
            console.error(err)
            res.status(409)
        }
    );
});

module.exports = router

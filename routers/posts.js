const express = require('express')
const router = express.Router()
const Posts = require('../models/Post')

router.get('/', (req,res)=>res.send('Posts Page !'))
router.post('/', (req,res)=>{
                            console.log(req.body)
})

module.exports = router

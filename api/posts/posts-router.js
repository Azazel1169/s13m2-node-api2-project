// implement your posts router here
const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({
        message: 'hello'
    })
})

router.get('/:id', (req,res) => {})

router.get('/:id/comments', (req,res) => {})

router.post('/', (req,res) => {})

router.delete('/:id', (req,res) => {})

router.put('/id', (req,res) => {})

module.exports = router
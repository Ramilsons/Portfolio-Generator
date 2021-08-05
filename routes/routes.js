const express = require('express');
const router = express.Router();


// Home
router.get('/', (req, res)=> {
    res.render('index.ejs')
})


// Form
router.get('/form', (req, res)=> {
    res.render('pages/form/form.ejs')
})

router.post('/form', (req, res)=> {
    res.send('Algumas informações ' + req.body.course)
})

// Portfolio

module.exports = router;
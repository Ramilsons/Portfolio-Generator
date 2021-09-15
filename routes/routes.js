import express from 'express';
import multer from 'multer';
import upload from '../controller/multer.js';

const router = express.Router();

// Home
router.get('/', (req, res)=> {
    res.render('index.ejs');
})


router.post('/novo-portfolio', upload.single('imgProject'), function (req, res, next) {
    console.log(req.body)
    res.redirect('/');
})


// Form
router.get('/form', (req, res)=> {
    res.render('pages/form/form.ejs');
})


// Portfolio


// Teste
router.post('/new-course', (req, res) => {
    console.log("In backend: "+JSON.stringify(req.body));
    res.send('brabo, tá?');
})

export default router;

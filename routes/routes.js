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

/*router.post('/form', (req, res)=> {
    res.send('Algumas informações ' + req.body);

})*/

// Portfolio

export default router;

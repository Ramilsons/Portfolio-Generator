import express from 'express';
import aaa from '../public/scripts/formScript.js';

const router = express.Router();

// Home
router.get('/', (req, res)=> {
    res.render('index.ejs');

})

// Form
router.get('/form', (req, res)=> {
    res.render('pages/form/form.ejs');
})

router.post('/form', (req, res)=> {
    res.send('Algumas informações ' + req.body);
   
    console.log(aaa) 
})

// Portfolio

export default router;

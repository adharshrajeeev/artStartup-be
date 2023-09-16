import express from 'express'
import { login, signup } from '../controller/adminController';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',login)

router.post('/signup',signup)

export default router;

import express from 'express'
import { login, signup } from '../controller/userController.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',login)

router.post('/signup',signup)

export default router;

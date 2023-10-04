import express from 'express'
import {Product}from '../controller/productController.js'

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',Product)



export default router;

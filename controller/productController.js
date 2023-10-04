import {create} from '../reporsitory/productRepository.js'

function sendResponse(
    res,
    message,
    success = true,
    statusCode = 200,
    data = null
  ) {
    return res.status(statusCode).json({ message, success, data });
  }
  export async function Product(req, res) {
    try {
      const { name,description, price } = req.body;
      console.log("req.body" , req.body)
      const newProduct = await create ({name,description,price})
      return sendResponse(res, "product successfully added", true, 200);
      
  }catch(error){
    console.error("Error during signup:" , error);
    return sendResponse(res, 'Internal server error', false, 500)
  }
  }

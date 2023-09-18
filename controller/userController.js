import { create, findByEmail } from '../reporsitory/userDbRepository.js';



function sendResponse({ res, message, success = true, statusCode = 200, data = null }) {
  return res.status(statusCode).json({ message, success, data });
}


export async function login(req, res) {
  try {
    const { email , password } = req.body;
    const user = await findByEmail(email);

    if (!user || user.password !== password) {
        console.log(user)
        return sendResponse({res, message:'Invalid credentials', success:false, statusCode:401});
      }

    // Generate a token or session for authentication

    return sendResponse({res, message:'Login successful',data:user.email});
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error',success:false });
  }
}

export async function signup(req, res) {
  try {
    const { email, password } = req.body;
    console.log("here")
    // Check if the email already exists
    const user = await findByEmail(email);
    if (user) {
      console.log("asdasd")
      return sendResponse({res, message:'Username already exists', success:false, statusCode:400});
    }

    // Create a new admin user
    const newAdmin = await create({ email, password });

    return sendResponse(res, 'Signup successful');
  } catch (error) {
    console.error('Error during signup:', error);
    return sendResponse(res, 'Internal server error', false, 500);
  }
}



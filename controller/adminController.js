import { create, findByEmail } from '../reporsitory/dbRepository.js';



function sendResponse(res, message, success = true, statusCode = 200) {
    return res.status(statusCode).json({ message, success });
  }

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await findByEmail(email);

    if (!admin || admin.password !== password) {
        return sendResponse(res, 'Invalid credentials', false, 401);
      }

    // Generate a token or session for authentication

    return sendResponse(res, 'Login successful');
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error',success:false });
  }
}

export async function signup(req, res) {
  try {
    const { email , password } = req.body;

    // Check if the username already exists
    const existingAdmin = await findByEmail(email);
    if (existingAdmin) {
      return sendResponse(res, 'Username already exists', false, 400);
    }

    // Create a new admin user
    const newAdmin = await create({ username, password });

    return sendResponse(res, 'Signup successful');
  } catch (error) {
    console.error('Error during signup:', error);
    return sendResponse(res, 'Internal server error', false, 500);
  }
}



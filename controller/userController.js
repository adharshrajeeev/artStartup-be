import { create, findByEmail } from "../reporsitory/userDbRepository.js";

function sendResponse(
  res,
  message,
  success = true,
  statusCode = 200,
  data = null
) {
  return res.status(statusCode).json({ message, success, data });
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await findByEmail(email);

    if (!user || user.password !== password) {
      console.log(user);
      return sendResponse(res, "Invalid credentials", false, 401);
    }

    // Generate a token or session for authentication

    return sendResponse(res, "Login successful", true, 200, {
      data: user.email,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return sendResponse(res, "Internal server error", false, 500);
  }
}

export async function signup(req, res) {
  try {
    const { email, password } = req.body;
    console.log("Email to find:", email.toLowerCase());

    const user = await findByEmail(email.toLowerCase());
    console.log("user", user);
    if (!user) {
      console.log("inside");
      const newAdmin = await create({ email, password });
      console.log("newAdmin", newAdmin);
      return sendResponse(res, "Signup successful", true, 200);
    } else {
      console.log("email");
      return sendResponse(res, "Email already exists", false, 400);
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return sendResponse(res, "Internal server error", false, 500);
  }
}

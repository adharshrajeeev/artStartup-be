import User from "../model/User.js";

export async function findByEmail(email) {
  return  await User.findOne({ email : email.toLowerCase() });
}


export async function create(data) {
    return User.create(data);
}


import Admin from "../model/Admin.js";

export async function findByEmail(email) {
  return Admin.findOne({ email });
}


export async function create(data) {
    return Admin.create(data);
}



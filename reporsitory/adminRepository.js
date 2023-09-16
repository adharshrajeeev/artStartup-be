import Admin from "../model/Admin";

export async function findByName(username) {
  return Admin.findOne({ username });
}


export async function create(data) {
    return Admin.create(data);
}



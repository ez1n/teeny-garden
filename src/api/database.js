import {database} from "./firebase";
import {ref, get} from "firebase/database";

export async function getAdminUser(user) {
  return get(ref(database, 'admins'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val()
        return {...user, isAdmin: admins.includes(user.uid)};
      }
      return user;
    })
}
import {auth} from "./firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {getAdminUser} from "./database";

const provider = new GoogleAuthProvider();

export async function signUp(userInfo) {
  const {displayName, email, password} = userInfo;

  return createUserWithEmailAndPassword(auth, email, password)
    .then(_ => updateUserName(displayName))
    .catch(error => error.code)
}

async function updateUserName(displayName) {
  updateProfile(auth.currentUser, {displayName});
}

export async function login(userInfo) {
  const {email, password} = userInfo;

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
}

export async function loginWithGoogle() {
  return signInWithPopup(auth, provider)
    .then(userCredential => userCredential.user)
    .catch(console.error);
}

export function logout() {
  signOut(auth)
    .then()
    .catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const newUser = user ? await getAdminUser(user) : null;
    callback(newUser);
  });
}
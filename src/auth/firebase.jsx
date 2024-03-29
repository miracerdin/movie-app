import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-hot-toast";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password, navigate) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/", { replace: true });
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password, navigate) => {
  console.log(email, password);
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    navigate("/", { replace: true });
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const Logout = async () => {
  try {
    await signOut(auth);
    toast.success("You successfully logged out.");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      toast.success("You successfully logged in. 😎");
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default app;

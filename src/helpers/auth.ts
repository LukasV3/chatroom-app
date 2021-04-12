import { auth } from "../services/firebase";
import randomColor from "randomcolor";

type authParams = {
  name?: string;
  email: string;
  password: string;
};

export const signup = async ({ name, email, password }: authParams) => {
  const userData = await auth().createUserWithEmailAndPassword(email, password);
  return await userData.user?.updateProfile({
    displayName: name,
    photoURL: randomColor({ luminosity: "dark" }),
  });
};

export const login = ({ email, password }: authParams) => {
  return auth().signInWithEmailAndPassword(email, password);
};

import { auth } from "../services/firebase";

type authParams = {
  email: string;
  password: string;
};

export const signup = ({ email, password }: authParams) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const login = ({ email, password }: authParams) => {
  return auth().signInWithEmailAndPassword(email, password);
};

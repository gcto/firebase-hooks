import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";

export const firebaseInit = (params: {
  apiKey: String;
  authDomain: String;
  projectId: String;
  storageBucket: String;
  messagingSenderId: String;
  appId: String;
  measurementId?: String;
}) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(params);

    firebase.firestore().settings({ ignoreUndefinedProperties: true });

    // TODO: Enable this to use emulator for local dev
    // if (/localhost:/.exec(location.host)) {
    //   firebase.functions().useEmulator('localhost', 5001);
    // }
  }
};

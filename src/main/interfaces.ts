import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/database";

export type FirebaseUser = firebase.User;

export type HttpsCallableOptions = firebase.functions.HttpsCallableOptions;

export type FirestoreQuery<D> = {
  where?: [
    // Single field condition
    (keyof D & string) | firebase.firestore.FieldPath,
    firebase.firestore.WhereFilterOp,
    D[keyof D]
  ];
  whereEquals?: Partial<D>;
  orderBy?: [
    (keyof D & string) | firebase.firestore.FieldPath,
    firebase.firestore.OrderByDirection
  ];
  limit?: number;
};

export type DocumentData = firebase.firestore.DocumentData;

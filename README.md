# Firebase Hooks

To install GCTO packages, set up local npm environment:
Create a github PAT token and put it in line 2

```bash
npm config set @gcto:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken PAT_TOKEN_GOES_HERE
```

Installing firebase hooks

```bash
npm i @gcto/firebase-hooks
```

## Usage

**Setup with Quasar**

```ts
// quasar/src/boot
import { firebaseInit } from "@gcto/firebase-hooks";
import { boot } from "quasar/wrappers";
export default boot(({ app }) => {
  app.use(() => {
    firebaseInit({
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGE_SENDER",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID",
    });
  });
});
```

**Create Collection**

```ts
// PROVIDE TYPE
type Dog = {
  name: string;
  breed: string;
};

// GET ALL IN COLLECTION
useFirestoreCollection<Dog>("dog");

// GET ONE IN COLLECTION
useFirestoreDoc<Dog>("dog", ()=>"dog_id"),

// QUERY FROM COLLECTION
useFirestoreDoc<Dog>("dog", ()=>"dog_id"),
```

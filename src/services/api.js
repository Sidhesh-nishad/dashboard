import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// for login purpuse and get the data of current user
export function getLoginData(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage;
        });
}

// to create user for authentication

export function createUserAuthentication(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage;
            // ..
        });
}

// To create user on database
/*
export async function createUserAtDataBase(name, role, age, status, pass, id) {
    // this property includes user data like name password or which are included in create user form
    try {
        const response = await setDoc(doc(db, "userData", id), {
            name: name,
            role: role,
            age: age,
            status: status,
            password: pass,
            Timestamp: serverTimestamp(),
        });
        if (!response.ok)
            throw new Error("Something went wront at data uploading");
        return response;
    } catch (err) {
        console.error(err.message);
    }
}
*/

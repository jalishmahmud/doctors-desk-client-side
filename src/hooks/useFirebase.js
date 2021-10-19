import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();

    const getUserName = e => {
        const userName = e.target.value;
        setUserName(userName);
    }
    const getUserEmail = e => {
        const userEmail = e.target.value;
        setUserEmail(userEmail);
    }
    const getUserPassword = e => {
        const userPassword = e.target.value;
        setUserPassword(userPassword);
    }

    const handleSignInSignUpToggle = e => {
        const checked = e.target.checked;
        setIsChecked(checked);
    }



    const registerUsingEmailPassword = e => {
        e.preventDefault();
        if (userPassword < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (/(?=.*[0-9].*[0-9])/.test(userPassword) === true) {
            console.log(userName, userEmail, userPassword);

            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then(result => {
                    setUser(result.user)
                })
            setError('');
            updateUserName();
            console.log(user);
        }
        else {
            setError('Password should be minimum two digit')
        }
    }
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: userName
        })
            .then(result => { })
            .catch(error => {
                setError(error.message)
            })
    }
    const signInUsingEmailPassword = e => {
        e.preventDefault();

        if (/(?=.*[0-9].*[0-9])/.test(userPassword) === true) {
            console.log(userEmail, userPassword);

            signInWithEmailAndPassword(auth, userEmail, userPassword)
                .then(result => {
                    setUser(result.user)
                })
                .catch((error) => {
                    setError(error.message)
                })

            setError('');
        }
        else {
            setError('Password should be minimum two digit')
        }
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googelProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { setUser({}) })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
        return unsubscribed;
    }, []);

    return {
        user,
        error,
        isChecked,
        getUserName,
        getUserEmail,
        getUserPassword,
        handleSignInSignUpToggle,
        registerUsingEmailPassword,
        signInUsingEmailPassword,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;
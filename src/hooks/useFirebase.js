import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isChecked, setIsChecked] = useState(false);


    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();

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

    // email password registration
    const registerUsingEmailPassword = e => {
        setIsLoading(true)
        e.preventDefault();
        if (userPassword.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (/(?=.*[0-9].*[0-9])/.test(userPassword) === true) {
            console.log(userEmail, userPassword);

            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then(result => {
                    setUser(result.user)
                    setError('')
                })
                .catch((error) => {
                    setError(error.message)
                })
                .finally(() => {
                    setIsLoading(false);
                })
            setError('');
        }
        else {
            setError('Password should be minimum two digit')
        }
    }
    // email password login
    const signInUsingEmailPassword = e => {
        setIsLoading(true);
        e.preventDefault();
        if (userPassword.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        if (/(?=.*[0-9].*[0-9])/.test(userPassword) === true) {
            console.log(userEmail, userPassword);

            return signInWithEmailAndPassword(auth, userEmail, userPassword)
                .then(result => {
                    setUser(result.user)
                    setError('')
                })
                .catch((error) => {
                    setError(error.message)
                })
                .finally(() => {
                    setIsLoading(false);
                });

        }
        else {
            setError('Password should have minimum two numeric character, for example (0-9)')
        }

    }
    // google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googelProvider)

    }

    // handle logout
    const logOut = () => {
        signOut(auth)
            .then(() => { setUser({}) })
    }

    // check if user login
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribed;
    }, []);

    return {
        user,
        error,
        isChecked,
        isLoading,
        setIsLoading,
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
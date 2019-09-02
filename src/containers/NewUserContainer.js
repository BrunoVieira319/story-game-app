import {useState} from 'react'
import {createContainer} from 'unstated-next'
import ServiceEndpoints from '../ServiceEndpoints'
import axios from 'axios'

const useNewUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [messageInvalidUsername, setMessageInvalidUsername] = useState("");
    const [messageInvalidPassword, setMessageInvalidPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleUsername = event => {
        setUsername(event.target.value)
    };

    const handlePassword = event => {
        setPassword(event.target.value)
    };

    const handleConfirmedPassword = event => {
        setConfirmedPassword(event.target.value)
    };

    function validateEntries() {
        if (password !== confirmedPassword) {
            setMessageInvalidPassword("Passwords do not match")
        }
        if (password.length < 6) {
            setMessageInvalidPassword("Password must contain at least six characters")
        }
        if (username.length < 3) {
            setMessageInvalidUsername("Username must contain at least three characters")
        }
        return password === confirmedPassword &&
            password.length >= 6 &&
            username.length >= 3;
    }

    const saveUser = () => {
        if (validateEntries()) {
            const user = {username, password};
            const headers = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
                }
            };
            axios.post(`${ServiceEndpoints.USER_SERVICE}/users`, user, headers)
                .then(() => setRedirect(true))
                .catch(error => setMessageInvalidUsername(error.response.data.message))
        }
    };

    return {
        username,
        handleUsername,
        password,
        handlePassword,
        confirmedPassword,
        handleConfirmedPassword,
        messageInvalidUsername,
        messageInvalidPassword,
        redirect,
        saveUser
    }
};

const NewUserContainer = createContainer(useNewUser);
export default NewUserContainer
import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useNewUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const handleUsername = event => {
        setUsername(event.target.value)
    };

    const handlePassword = event => {
        setPassword(event.target.value)
    };

    const handleConfirmedPassword = event => {
        setConfirmedPassword(event.target.value)
    };

    return {
        username,
        handleUsername,
        password,
        handlePassword,
        confirmedPassword,
        handleConfirmedPassword
    }
};

const NewUserContainer = createContainer(useNewUser);
export default NewUserContainer
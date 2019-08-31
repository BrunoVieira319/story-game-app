import { useState } from 'react'
import { createContainer } from 'unstated-next'

const useForm = () => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleName = event => {
        setName(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    return {
        password,
        name,
        handleName,
        handlePassword,
    };
};

const LoginContainer = createContainer(useForm)
export default LoginContainer
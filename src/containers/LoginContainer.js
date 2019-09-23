import {useState} from 'react'
import {createContainer} from 'unstated-next'
import axios from "axios"
import ServiceEndpoints from "../ServiceEndpoints"

const useForm = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleUsername = event => {
        setUsername(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const sendCredentials = () => {
        const credentials = {username, password};
        const headers = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        };
        axios.post(`${ServiceEndpoints.USER_SERVICE}/users/login`, credentials, headers)
            .then(res => {
                if (res.data.id !== undefined) {
                    setRedirect(true);
                    setUserId(res.data.id);
                }
            })
            .catch()
    };

    return {
        userId,
        password,
        username,
        handleUsername,
        handlePassword,
        sendCredentials,
        redirect
    }
};

const LoginContainer = createContainer(useForm);
export default LoginContainer
import React, {useState} from "react"
import axios from "axios/index"
import ServiceEndpoints from "../ServiceEndpoints"

const LoginContext = React.createContext({});

const LoginProvider = component => {
    const [userId, setUserId] = useState("5d9a7f03f83ecb6cea8a776e");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleUsername = event => {
        setUsername(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const sendCredentials = async () => {
        const credentials = {username, password};
        const headers = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        };

        const response = await axios.post(`${ServiceEndpoints.USER_SERVICE}/users/login`, credentials, headers);

        if (response.data.id !== undefined) {
            setUserId(response.data.id);
        }
    };

    React.useEffect(() => {
        if (userId !== "") {
            setRedirect(true)
        }
    }, [userId]);

    return (
        <LoginContext.Provider
            value={{
                userId,
                password,
                username,
                handleUsername,
                handlePassword,
                sendCredentials,
                redirect
            }}
        >
            {component.children}
        </LoginContext.Provider>
    )
};

export {LoginContext, LoginProvider};
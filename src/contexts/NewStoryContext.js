import React, {useState, useContext} from 'react'
import axios from 'axios'
import ServiceEndpoints from '../ServiceEndpoints'
import {LoginContext} from ".//LoginContext"

const NewStoryContext = React.createContext({});

const NewStoryProvider = component => {
    const login = useContext(LoginContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState("");
    const [response, setResponse] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleTitle = event => {
        setTitle(event.target.value)
    };

    const handleDescription = event => {
        setDescription(event.target.value)
    };

    const handleCover = event => {
        setCover(event.target.value)
    };

    const saveNewStory = () => {
        const story = {title, creatorId: login.userId, cover, description};
        const headers = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        };
        axios.post(`${ServiceEndpoints.STORY_SERVICE}/stories`, story, headers)
            .then(response => setResponse(response))
    };

    React.useEffect(() => {
        if (response !== "") {
            setRedirect(true)
        }
    }, [response]);

    return (
        <NewStoryContext.Provider
            value={{
                title,
                description,
                cover,
                handleTitle,
                handleDescription,
                handleCover,
                saveNewStory,
                redirect
            }}
        >
            {component.children}
        </NewStoryContext.Provider>
    );
};

export {NewStoryContext, NewStoryProvider}
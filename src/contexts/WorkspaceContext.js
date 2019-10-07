import React, {useState, useEffect, useContext, createContext} from 'react'
import {LoginContext} from './LoginContext'
import axios from "axios"
import ServiceEndpoints from "../ServiceEndpoints"

const WorkspaceContext = createContext({});

const WorkspaceProvider = component => {
    const login = useContext(LoginContext);
    const [stories, setStories] = useState([]);

    useEffect( () => {
        const fetchStories = async () => {
            const response = await axios.get(`${ServiceEndpoints.STORY_SERVICE}/stories/${login.userId}`);

            if (response.status === 200) {
                setStories(response.data);
            }
        };

        fetchStories();
    }, []);

    return (
        <WorkspaceContext.Provider
            value={{
                stories
            }}
        >
            {component.children}
        </WorkspaceContext.Provider>
    )
};

export {WorkspaceProvider, WorkspaceContext}
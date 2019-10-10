import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import ServiceEndpoints from "../ServiceEndpoints"

const StoryContext = React.createContext({});

const StoryProvider = component => {
    let {id} = useParams();
    const [acts, setActs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const fetchActs = async () => {
            const response = await axios.get(
                `${ServiceEndpoints.ACT_SERVICE}/acts/story/${id}`,
                { cancelToken: source.token });

            if (response.status === 200) {
                setActs(response.data)
            }
        };

        fetchActs();
        return () => {
            source.cancel();
        };
    }, []);

    const handleModal = () => setShowModal(!showModal);

    return (
        <StoryContext.Provider
            value={{
                acts,
                showModal,
                handleModal
            }}
        >
            {component.children}
        </StoryContext.Provider>
    )
};

export {StoryContext, StoryProvider}
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import ServiceEndpoints from "../ServiceEndpoints"

const StoryContext = React.createContext({});

const StoryProvider = component => {
    let {storyId} = useParams();
    const [acts, setActs] = useState([]);
    const [fetchAct, fetchActs] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [actDescription, setActDescription] = useState("");
    const [cover, setCover] = useState("");

    const handleModal = () => setShowModal(!showModal);
    const handleTitle = e => setTitle(e.target.value);
    const handleActDescription = e => setActDescription(e.target.value);
    const handleCover = e => setCover(e.target.value);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const fetchActs = async () => {
            const response = await axios.get(
                `${ServiceEndpoints.ACT_SERVICE}/acts/story/${storyId}`,
                {cancelToken: source.token});

            if (response.status === 200) {
                setActs(response.data)
            }
        };

        fetchActs();
        return () => {
            source.cancel();
        };
    }, [fetchAct]);

    const saveAct = () => {
        const act = {
            storyId,
            title,
            description: actDescription,
            cover
        };
        axios.post(`${ServiceEndpoints.ACT_SERVICE}/acts`, act)
            .then(response => {
                if (response.status === 201) {
                    fetchActs(!fetchAct);
                    resetModal();
                }
            })
    };

    const resetModal = () => {
        handleModal();
        setActDescription("");
        setCover("");
    };

    return (
        <StoryContext.Provider
            value={{
                acts,
                showModal,
                handleModal,
                title,
                handleTitle,
                actDescription,
                handleActDescription,
                cover,
                handleCover,
                saveAct,
                resetModal
            }}
        >
            {component.children}
        </StoryContext.Provider>
    )
};

export {StoryContext, StoryProvider}
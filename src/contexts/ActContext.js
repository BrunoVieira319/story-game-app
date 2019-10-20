import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import ServiceEndpoints from "../ServiceEndpoints"

const ActContext = React.createContext({});

const ActProvider = component => {
    const {actId} = useParams();
    const [act, setAct] = useState({});
    const [actTitles, setActTitles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [choiceDescription, setChoiceDescription] = useState("");
    const [toAct, setToAct] = useState("");

    const handleModal = () => setShowModal(!showModal);
    const handleChoiceDescription = e => setChoiceDescription(e.target.value);
    const handleToAct = e => setToAct(e.target.value);

    const saveChoice = () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();



        const choice = {
            description: choiceDescription,
            toAct,
            actId: actTitles.find(t => t.title === toAct).id
        };
        const postChoice = async () => {
            resetModal();
            const response = await axios.post(
                `${ServiceEndpoints.ACT_SERVICE}/acts/${actId}/choices`, choice,
                {cancelToken: source.token});

            if (response.status === 200) {
                setAct(response.data);
            }
        };

        postChoice();
        return () => {
            source.cancel();
        };
    };

    const resetModal = () => {
        handleModal();
        setChoiceDescription("");
        setToAct("");
    };

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchAct = async () => {
            const response = await axios.get(
                `${ServiceEndpoints.ACT_SERVICE}/acts/${actId}`,
                {cancelToken: source.token});

            if (response.status === 200) {
                setAct(response.data);
                fetchActTitles(response.data.storyId);
            }
        };

        const fetchActTitles = async (storyId) => {
            const response = await axios.get(
                `${ServiceEndpoints.ACT_SERVICE}/acts/story/${storyId}/titles`,
                {cancelToken: source.token});

            if (response.status === 200) {
                setActTitles(response.data);
            }
        };

        fetchAct();
        return () => {
            source.cancel();
        };
    }, []);

    return (
        <ActContext.Provider
            value={{
                act,
                actTitles,
                showModal,
                handleModal,
                resetModal,
                choiceDescription,
                handleChoiceDescription,
                toAct,
                handleToAct,
                saveChoice
            }}
        >
            {component.children}
        </ActContext.Provider>
    )
};

export {ActContext, ActProvider}
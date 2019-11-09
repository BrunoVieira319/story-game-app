import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import axios from "axios";
import ServiceEndpoints from "../ServiceEndpoints";

const PlayerContext = React.createContext({});

const PlayerProvider = props => {
    const {storyId} = useParams();
    const [acts, setActs] = useState([]);
    const [currentAct, setCurrentAct] = useState({});

    const goToAct = actId => {
        setCurrentAct(acts.find(a => a.id === actId));
        window.scrollTo({behavior: "smooth", top: 0});
    };

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchActs = async () => {
            const response = await axios.get(
                `${ServiceEndpoints.ACT_SERVICE}/acts/story/${storyId}`,
                {cancelToken: source.token});

            if (response.status === 200) {
                setActs(response.data);
                setCurrentAct(response.data.find(act => act.intro));
            }
        };
        fetchActs();
        return () => source.cancel()
    }, []);

    return (
        <PlayerContext.Provider
            value={{
                currentAct,
                goToAct
            }}
        >
            {props.children}
        </PlayerContext.Provider>
    )
};

export {PlayerContext, PlayerProvider}
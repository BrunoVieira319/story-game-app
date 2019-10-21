import React, {useState, useEffect} from "react"
import axios from "axios";
import ServiceEndpoints from "../ServiceEndpoints";

const BrowseContext = React.createContext({});

const BrowseProvider = props => {
    const [page , setPage] = useState(0);
    const [stories, setStories] = useState([]);

    const handlePage = e => setPage(e.target.value);

    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchPopularStories = async () => {
            const response = await axios.get(
                `${ServiceEndpoints.STORY_SERVICE}/stories/popular?page=${page}`,
                {cancelToken: source.token});

            if (response.status === 200) {
                setStories(response.data);
            }
        };
        fetchPopularStories();
        return () => {
            source.cancel();
        };
    }, [page]);

    return (
        <BrowseContext.Provider
            value={{
                page,
                handlePage,
                stories
            }}
        >
            {props.children}
        </BrowseContext.Provider>
    );
};

export {BrowseContext, BrowseProvider}
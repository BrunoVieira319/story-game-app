import {useState} from 'react'
import {createContainer} from 'unstated-next'
import LoginContainer from './LoginContainer'
import axios from 'axios'
import ServiceEndpoints from '../ServiceEndpoints'

const useNewStory = () => {
    const user = LoginContainer.useContainer();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState("");
    const [saved, setSaved] = useState(false);


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
        const story = {title, creatorId: user.userId, cover, description};
        console.log(user.username)
        const headers = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        };
        axios.post(`${ServiceEndpoints.STORY_SERVICE}/stories`, story, headers)
            .then(() => setSaved(true))
    };

    return {
        title,
        description,
        cover,
        handleTitle,
        handleDescription,
        handleCover,
        saveNewStory,
        saved,
        ...user
    }
};

const NewStoryContainer = createContainer(useNewStory);
export default NewStoryContainer
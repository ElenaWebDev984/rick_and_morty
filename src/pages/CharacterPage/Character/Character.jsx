import {useParams} from "react-router";


export const Character = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Character id: {id}</h1>
        </div>
    );
};


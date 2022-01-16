import React, {useContext} from 'react';
import NameContext from '../context/NameContext';

const Home = () => {
    const a = useContext(NameContext);
    return (
        <div>
            <h1>My name is {a.name}</h1>
            <h1>My registration number is {a.registration}</h1>
        </div>
    )
}

export default Home

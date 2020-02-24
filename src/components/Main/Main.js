import React, {useState} from 'react';
import './Main.scss';
import Nav from '../Nav/Nav';
import Pic from '../Pic/Pic';
import InfoBar from '../InfoBar/InfoBar';
import FavPanel from '../FavPanel/FavPanel';
import InfoPanel from "../InfoPanel/InfoPanel";
import dogService from "../dogService";
import getNewDog from "../getNewDog";
import postNewDog from "../postNewDog";

const Main = () => {

    const [dog, setDog] = useState(dogService());

    const handleCreateDogs = (e) => {
        e.preventDefault();
        getNewDog();
        // postNewDog()
    };

    //

    return (
        <>
            <Nav/>
            <section className="dog">
                <Pic dogPicture={dog.picture}/>
                <InfoBar
                    dogName={dog.name}
                    dogAge={dog.age}
                />
            </section>
            <FavPanel/>
            <InfoPanel
                dogFeatures={dog.features}
            />
            <button onClick={handleCreateDogs}>Utwórz pieseła!!!</button>
        </>
    );
};

export default Main;

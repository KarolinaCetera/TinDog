import React, {useState} from 'react';
import './Main.scss';
import Nav from '../Nav/Nav';
import Pic from '../Pic/Pic';
import InfoBar from '../InfoBar/InfoBar';
import FavPanel from '../FavPanel/FavPanel';
import InfoPanel from "../InfoPanel/InfoPanel";
import {dogService} from "../dogService";
// import getNewDog from "../getNewDog";
import postNewDog from "../postNewDog";

const Main = () => {

    const [dog, setDog] = useState(dogService());
    const [info, setInfo] = useState(false);
    //
    const handleCreateDogs = (e) => {
        e.preventDefault();
        postNewDog();
    };

    const handleInfo = () => {
        setInfo(true);
    };

    const handleCloseInfo = () => {
        setInfo(false);
    };

    //do stanu zapisać wszystkie obiekty z firebase w tablicy
    // losować obiekt i przypisywać

    return (
        <>
            <Nav/>
            <section className="dog">
                <Pic dogPicture={dog.picture} info={info}/>
                <InfoBar
                    dogName={dog.name}
                    dogAge={dog.age}
                    info={info}
                />
            </section>
            <FavPanel info={info} onInfo={handleInfo}/>
            <InfoPanel
                info={info}
                dog={dog}
                onClose={handleCloseInfo}
            />
            <button onClick={handleCreateDogs}>Utwórz pieseła!!!</button>
        </>
    );
};

export default Main;

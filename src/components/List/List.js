import React, {useEffect, useState} from 'react';
import './List.scss';
import InfoPanel from "../InfoPanel/InfoPanel";
import ListElement from "../ListElement/ListElement";
import database from "../firebaseService";

const List = () => {
    const [list, setList] = useState([]);
    const [showInfo, toggleShowInfo] = useState(false);
    const [selectedDog, setSelectedDog] = useState(null);

    const getDogs = () => {
        fetch('https://tin-dog.firebaseio.com/list.json')
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error('Błąd sieci!')
                }
            })
            .then(dog => {
                const dogsID = Object.keys(dog);
                const arrayOfDogs = Object.values(dog);
                arrayOfDogs.forEach((dog, index) => {
                    dog.id = dogsID[index];
                    setList(prevState => [...prevState, dog])
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(()=>{
       getDogs();
    }, []);

    const handleShowInfo = (dog)=> {
        toggleShowInfo(true);
        setSelectedDog(dog);
    };

    const handleCloseInfo = () => {
        toggleShowInfo(false);
    };

    const handleDeleteDog = (dog) => {
        const filteredDogs = list.filter((listElement) => {
            return dog.id !== listElement.id;
        });
        setList(filteredDogs);
        database.ref(`/list/${dog.id}`).remove();
    };

    return (
        <>
            <ul className="dogs-list">
                {list.map((element, i) => {
                    return <ListElement
                                dog={element}
                                key={i}
                                showInfo={showInfo}
                                onShowInfo={() => handleShowInfo(element)}
                                onDeleteDog={() => handleDeleteDog(element)}
                            />}
                )}
            </ul>
            {showInfo && <InfoPanel
                info={showInfo}
                dog={selectedDog}
                onClose={handleCloseInfo}/> }
        </>
    );
};

export default List;

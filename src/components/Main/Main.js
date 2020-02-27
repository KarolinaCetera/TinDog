import React, {useState, useEffect} from 'react';
import './Main.scss';
import Pic from '../Pic/Pic';
import InfoBar from '../InfoBar/InfoBar';
import FavPanel from '../FavPanel/FavPanel';
import InfoPanel from "../InfoPanel/InfoPanel";
// import postNewDog from "../postNewDog";

const Main = () => {

    const [dog, setDog] = useState('');
    const [dogs, setDogs] = useState([]);
    const [info, setInfo] = useState(false);
    const [isLoading, toggleIsLoading] = useState(true);

    const dogsLength = dogs.length;
    const randomDog = Math.floor(Math.random() * (dogsLength - 1)) + 1;

    useEffect(() => {
        fetch('https://tin-dog.firebaseio.com/dogs.json')
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
                });
                const someDog = arrayOfDogs[randomDog];
                setDog(someDog);
                setDogs(arrayOfDogs);
                toggleIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    // const handleCreateDogs = (e) => {
    //     e.preventDefault();
    //     postNewDog();
    // };

    const handleInfo = () => {
        setInfo(true);
    };

    const handleCloseInfo = () => {
        if (dogsLength === 0) {
            return null;
        }
        setInfo(false);
    };

    const handleShowNewDog = () => {
        setDog(dogs[Math.floor(Math.random() * (dogsLength - 1)) + 1]);
    };

    const handleAddDog = () => {
        const dogIndex = dogs.indexOf(dog);
        const filteredDogs = [...dogs];
        filteredDogs.splice(dogIndex,1);
        setDogs(filteredDogs);
        setDog(dogs[randomDog]);
        fetch('https://tin-dog.firebaseio.com/list.json', {
            method: "POST",
            body: JSON.stringify(dog),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error('Błąd sieci!')
                }
            })
            .catch(error => {
                console.log(error);
            });
        toggleIsLoading(false);
    };

    return (
        <>
            <main>
                {isLoading ? null: <section className="dog">
                    <Pic dog={dog}
                         info={info}
                         dogsLength={dogsLength}/>
                    <InfoBar
                        dog={dog}
                        info={info}
                        dogs={dogs}/>
                    {dogsLength === 0 ? null : <FavPanel info={info} onInfo={handleInfo} onNext={handleShowNewDog} onAdd={handleAddDog}/>}
                </section> }
                {isLoading || dogsLength === 0 ?  null : <InfoPanel
                    info={info}
                    dog={dog}
                    onClose={handleCloseInfo}/>}
            </main>
            {/*<button onClick={handleCreateDogs}>Utwórz pieseła!!!</button>*/}
        </>
    );
};

export default Main;

// w oknie info zmienić słuchawkę na ikonkę zdjęcia, po kliknięciu wyświetla się zdjęcie psa
// ale jak to ogarnąć na mobile??
//nowy stan dogsOnTheList, który przy renderze pobiera z list.json i porównywać dogs z dogsOnTheList - przez filter wyświetlać te, których nie ma

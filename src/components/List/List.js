import React, {useEffect, useState} from 'react';
import './List.scss';


const List = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
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
    }, []);
    console.log(list);
    return (
        <>
            <ul className="dogs-list">
                {list.map((element, i) => {
                   return (
                       <li className="dogs-list__element" key={i}>
                           <span className="dogs__name">{element.name}</span>
                           <div className="dogs__icons">
                               <i className="fa fa-phone" aria-hidden="true"/>
                               <i className="fa fa-info" aria-hidden="true"/>
                               <i className="fa fa-times" aria-hidden="true"/>
                           </div>
                       </li>
                       )
                })}
            </ul>
        </>
    );
};

export default List;

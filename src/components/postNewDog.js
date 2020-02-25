import {Dog} from "./dogService";

const postNewDog = () => {
    const dog = new Dog();
    console.log(dog)
    // fetch('https://tin-dog.firebaseio.com/dogs.json', {
    //     method: "POST",
    //     body: JSON.stringify(dog),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then(response => {
    //         if(response.ok) {
    //             return response.json()
    //         } else {
    //             throw new Error('Błąd sieci!')
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
};

export default postNewDog;

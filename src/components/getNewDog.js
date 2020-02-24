import dogService from "./dogService";

const getNewDog = () => {
    const dogFeatures = dogService();
    fetch('https://tin-dog.firebaseio.com/dogs.json')
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('Błąd sieci!')
            }
        })
        .then(dog => {
            console.log(dog)
        })
        .catch(error => {
            console.log(error);
        })
};

export default getNewDog;

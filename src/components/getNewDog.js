const getNewDog = () => {
    let randomDog = {};
    fetch('https://tin-dog.firebaseio.com/dogs.json')
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('Błąd sieci!')
            }
        })
        .then(dog => {
            const arrayOfDogs = Object.values(dog);
            randomDog = arrayOfDogs[Math.floor(Math.random() * (10 - 1)) + 1]
        })
        .catch(error => {
            console.log(error);
        });
    console.log(randomDog)

};

export default getNewDog;

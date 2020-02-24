import dogService from "./dogService";

const postNewDog = () => {
    const dogFeatures = dogService();
    console.log(dogFeatures);
    fetch('https://tin-dog.firebaseio.com/dogs.json', {
        method: "POST",
        body: JSON.stringify(dogFeatures),
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
        })
};

export default postNewDog;

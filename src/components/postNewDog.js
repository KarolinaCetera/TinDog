import {Dog} from "./dogService";

const postNewDog = () => {
    const dog = new Dog();
    const setName = () => {
        fetch('https://uinames.com/api/?region=england')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error ('Błąd sieci!')
                }
            })
            .then(name => {
                dog.name = name.name;
            })
            .catch(error => {
                console.log(error);
            });
        };

        fetch('https://random.dog/woof.json')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Błąd sieci!')
                }
            })
            .then(picture => {
                dog.picture = picture.url;
                setName();
                dog.randomize();
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            fetch('https://tin-dog.firebaseio.com/dogs.json', {
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
                })
            console.log('gotowe!')
        },3000);

};

export default postNewDog;

export class Dog {
    constructor() {
        this.picture = '';
        this.name = '';
        this.age = Math.floor(Math.random() * (12 - 1)) + 1;
        this.features = [
            {
                type: "Health",
                value: '', //math random na indexie tablicy
            },
            {
                type: "Children",
                value: ''
            },
            {
                type: "Other pets",
                value: ''
            },
            {
                type: "Food",
                value: ''
            },
            {
                type: "Cleanness",
                value: ''
            },
            {
                type: "Activity",
                value: ''
            },
            {
                type: "Vaccinaction",
                value: ''
            },
            {
                type: "Character",
                value: ''
            }
        ]
    }

    dogFeatures() {
        fetch('https://random.dog/woof.json')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error ('Błąd sieci!')
                }
            })
            .then(picture => {
                return picture.url;
            })
            .catch(error => {
                console.log(error);
            });

        fetch('https://uinames.com/api/?region=england')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error ('Błąd sieci!')
                }
            })
            .then(name => {
                return name.name;
            })
            .catch(error => {
                console.log(error);
            });

        const healthOptions = ['healthy', 'require special treatment', 'require meds', 'terminally ill'];
        const childrenOptions = ['yes', 'no'];
        const otherPetsOptions = ['yes', 'no', 'only cats', 'only dogs'];
        const foodOptions = ['normal diet', 'require special diet', 'require low-fat diet', 'require low-carb diet'];
        const cleannessOptions = ['totally trained', 'require training'];
        const activityOptions = ['low', 'medium', 'high'];
        const vaccinationOptions = ['yes', 'no'];
        const characterOptions = ['shy', 'nervous', 'happy', 'calm', 'enthusiastic'];

        const [health, children, otherPets, food, cleanness, activity, vaccination, character] = this.features;
        health.value = healthOptions[Math.floor(Math.random() * (4 - 1)) + 1];
        children.value = childrenOptions[Math.floor(Math.random() * (2 - 1)) + 1];
        otherPets.value = otherPetsOptions[Math.floor(Math.random() * (4 - 1)) + 1];
        food.value = foodOptions[Math.floor(Math.random() * (4 - 1)) + 1];
        cleanness.value = cleannessOptions[Math.floor(Math.random() * (2 - 1)) + 1];
        activity.value = activityOptions[Math.floor(Math.random() * (3 - 1)) + 1];
        vaccination.value = vaccinationOptions[Math.floor(Math.random() * (2 - 1)) + 1];
        character.value = characterOptions[Math.floor(Math.random() * (5 - 1)) + 1];
    }
}

export const dogService = () => {
    const dog = {
        picture: 'https://random.dog/5384c2a7-9b73-478e-9f32-9af9f264da1d.jpg',
        name: 'Gary',
        age: 5,
        features: [
            {
                type: "Health",
                value: 'healthy'
            },
            {
                type: "Children",
                value: 'no'
            },
            {
                type: "Other pets",
                value: 'yes'
            },
            {
                type: "Food",
                value: 'low-fat diet'
            },
            {
                type: "Cleanness",
                value: 'tottally trained'
            },
            {
                type: "Activity",
                value: 'medium'
            },
            {
                type: "Vaccinaction",
                value: 'yes'
            },
            {
                type: "Character",
                value: 'shy'
            },
        ]
    };
    return dog;
};

export default {Dog, dogService};

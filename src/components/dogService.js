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

    randomize () {
            const healthOptions = ['healthy', 'require special treatment', 'require meds', 'terminally ill'];
            const childrenOptions = ['yes', 'no'];
            const otherPetsOptions = ['yes', 'no', 'only cats', 'only dogs'];
            const foodOptions = ['normal diet', 'require special diet', 'name', 'require low-carb diet'];
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

export default {Dog};

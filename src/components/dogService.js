const dogService = () => {
    const dog = {
        picture: 'https://random.dog/5384c2a7-9b73-478e-9f32-9af9f264da1d.jpg',
        name: 'Gary',
        age: 5,
        features: [
            {
                type: "health",
                value: 'healthy'
            },
            {
                type: "children",
                value: 'no'
            },
            {
                type: "otherPets",
                value: 'yes'
            },
            {
                type: "food",
                value: 'low-fat diet'
            },
            {
                type: "cleanness",
                value: 'tottally trained'
            },
            {
                type: "activity",
                value: 'medium'
            },
            {
                type: "isVaccinated",
                value: 'yes'
            },
            {
                type: "character",
                value: 'shy'
            },
        ]
    };

    return dog;
};

export default dogService;

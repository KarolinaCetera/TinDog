// useEffect(() => {
//     fetch('https://uinames.com/api/?region=england')
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error ('Błąd sieci!')
//             }
//         })
//         .then(data => {
//             setName(data.name);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     const randomNumber = Math.floor(Math.random() * (12 - 1)) + 1;
//     setAge(randomNumber);
// }, []);

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATkvOKapQvjpBVI1F-kJHByT1ZKm4srj4",
    authDomain: "tin-dog.firebaseapp.com",
    databaseURL: "https://tin-dog.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;

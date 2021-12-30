import { initializeApp } from 'firebase/app';
let app


const firebaseConfig = {
    apiKey: "AIzaSyClZBCU0z9T5Fxbz8MZdw3Gmn3Godbo9dI",
    authDomain: "fem-product-feedback-app.firebaseapp.com",
    projectId: "fem-product-feedback-app",
    storageBucket: "fem-product-feedback-app.appspot.com",
    messagingSenderId: "342077400067",
    appId: "1:342077400067:web:2d4986d9cbb6f1f04f5a36"
};


export const initialiseFirebase = () => {
    app = initializeApp(firebaseConfig);
    // console.log({app, appInitialised: true})
};

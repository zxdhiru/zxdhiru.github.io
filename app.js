import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://valentinee-1-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);
const fUsersInDB = ref(database,  'fpName');
const sUsersInDB = ref(database,  'spName');
const quoteInDB = ref(database,  'quote');

const fpNameStored = localStorage.getItem("fpName");
const spNameStored = localStorage.getItem("spName");
const storageQuote = localStorage.getItem("chosenQuote");



document.addEventListener("DOMContentLoaded", function() {
    push(fUsersInDB,fpNameStored);
    push(sUsersInDB,spNameStored);
    push(quoteInDB,storageQuote);
})
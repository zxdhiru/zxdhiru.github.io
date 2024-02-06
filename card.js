const chosenQuote = document.querySelector("#chosenQuote");

const storageQuote = localStorage.getItem("chosenQuote");

chosenQuote.innerText = storageQuote;

const spNameStored = localStorage.getItem("spName");
const spNameWritten = document.querySelector("#spName");

spNameWritten.innerText = spNameStored.toLowerCase();

const fpNameStored = localStorage.getItem("fpName");
const fpNameWritten = document.querySelector("#fpName");

fpNameWritten.innerText = fpNameStored.toLocaleLowerCase();

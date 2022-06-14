// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

const celebration = "wedding";

function writeCards( names, celebration ) {
    let thankYourCards = []
    for ( let i = 0; i < names.length; i++) {
        thankYourCards.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`)
    }

    return thankYourCards
};  

function countDown(p){
    let count = p
    while (count >= 0) {
        console.log(count);
        count -= 1
    }
}
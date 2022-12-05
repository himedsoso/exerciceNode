const userInfo = require('./information');
const cowsay = require("cowsay");
console.log(userInfo);

console.log(cowsay.say({
    text : "je m'appelle " +userInfo.name + " je suis à la " +userInfo.school,
    e : "oO",
    T : "U "
}));
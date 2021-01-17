const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

function adminLogin() {
    let password = document.getElementById('passwordInput').value;
    if(password == 'password') {
        console.log('Logged in!');
    }
}